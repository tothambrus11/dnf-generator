import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dnf-generator2';

  varCount = 3;

  letters: string[] = [];
  possibleValues: boolean[][] = [];
  possibleValues2: boolean[] = [];
  resultArray: { index: number, value: boolean }[] = [];
  formulas: string[] = [];

  constructor() {
    this.changeVarCount(2)
  }

  changeVarCount(number: number) {
    this.varCount = number;
    this.varCount = Math.min(Math.max(this.varCount, 1), 10);

    this.generateLetters();
    this.generateVariablePossibleValues();
    this.generateResult();
  }

  private generateLetters() {
    this.letters = [];
    const A = 'A'.charCodeAt(0);
    for (let i = 0; i < this.varCount; i++) {
      this.letters.push(String.fromCharCode(A + i));
    }
  }

  private generateVariablePossibleValues() {
    this.possibleValues = [];
    this.possibleValues2 = [];

    // XD wtfff angular change detection - don't reuse number elements or idk... it works now
    setTimeout(() => {

      // 2^n possible variable values
      const numOfPossibilities = 2 ** this.varCount;
      for (let i = 0; i < numOfPossibilities; i++) {
        const varsString = i.toString(2).padStart(this.varCount, '0');

        const varsBoolArray: boolean[] = [];
        for (let j = 0; j < this.varCount; j++) {
          const value = varsString.charAt(j) == '1';
          this.possibleValues2.push(value)
          varsBoolArray.push(value);
        }
        this.possibleValues.push(varsBoolArray);
      }

      this.updateFormulas();
    }, 1)


    console.log(this.possibleValues2)
  }

  private generateResult() {
    const resultCount = 2 ** this.varCount;
    while (this.resultArray.length < resultCount) {
      this.resultArray.push({index: this.resultArray.length, value: false});
    }
    this.resultArray.splice(resultCount); // remove excess elements
  }

  changeState(i: number, state: boolean) {
    console.log("change state ", i, state)
    this.resultArray[i].value = state;
    this.updateFormulas();
  }

  updateFormulas() {
    this.formulas = [];
    const resultCount = 2 ** this.varCount;

    let lastIndex: number | undefined = undefined;
    for (let i = 0; i < resultCount; i++) {
      if (!this.resultArray[i].value) {
        this.formulas.push("")
        continue;
      }
      lastIndex = i;
      let formulaTags: string[] = [];
      this.possibleValues[i].forEach((val, j) => {
        formulaTags.push((val ? '' : '¬') + this.letters[j]);
      })
      //this.formulas.push( ? i + " A B C  ∧ ":'')
      this.formulas.push('(' + formulaTags.join(" ∧ ") + ')');
    }

    for (let i = 0; i < this.formulas.length; i++) {
      if(this.formulas[i].length && i != lastIndex){
        this.formulas[i] += " ∨"
      }
    }
  }
}
