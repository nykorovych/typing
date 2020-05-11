import { Component } from '@angular/core';
import { address, lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentance = lorem.sentence();
  typedString =''


  onInput (input:any) {
    this.typedString = input
    
  }

  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) return 'pennding'
    return letter === enteredLetter ? 'correct' : 'wrong'
  }
}
