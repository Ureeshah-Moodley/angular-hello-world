import { Component } from '@angular/core';
import {Pipe} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
}
@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormat {
  transform(value: number,
      currencySign: string = 'R ',
      decimalLength: number = 2, 
      chunkDelimiter: string = ',', 
      decimalDelimiter:string = '.',
      chunkLength: number = 3): string {

      let result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
      let num = value.toFixed(Math.max(0, ~~decimalLength));

      return currencySign +(decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
  }
}
