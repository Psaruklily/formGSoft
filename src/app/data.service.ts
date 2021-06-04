import { Injectable } from '@angular/core';
import { Tehnology } from './Tehnologys';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  tehnologys: Tehnology[] = [
    {name: 'Angular', version: ['1.1.1', '1.2.1', '1.3.3']},
    {name: 'React', version: ['2.1.2', '3.2.4', '4.3.1']},
    {name: 'Vue', version: ['3.3.1', '5.2.1', '5.1.3']},
  ]

  getTehnologys(): Tehnology[] {
    return this.tehnologys;
  }

}
