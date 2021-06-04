import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formForDevelopers: FormGroup;
  selectedObject: tehnology;
  periodOptions = [];
  tehnologys;

  constructor() { 
    this.formForDevelopers = new FormGroup({
      developersName : new FormControl('Лілія', [
        Validators.required,
        Validators.pattern('([a-zA-Z]).{2,}')
      ]),
      developersSurname : new FormControl('Псарук', [
        Validators.required,
        Validators.pattern('([a-zA-Z]).{2,}')
      ]),
      selectTehnology: new FormControl('', Validators.required),
      selectVersion: new FormControl('', Validators.required),
      developersEmail : new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })

    this.tehnologys = [
      {name: 'Angular', version: ['1.1.1', '1.2.1', '1.3.3']},
      {name: 'React', version: ['2.1.2', '3.2.4', '4.3.1']},
      {name: 'Vue', version: ['3.3.1', '5.2.1', '5.1.3']},
    ]
   }

  ngOnInit(): void {
  }

  send() {
    console.log(this.formForDevelopers);
  }

  changeModelOfSelect(val):void {
    this.periodOptions = val.version;
  }
}

interface tehnology {
  name: string;
  version: string[]
}
