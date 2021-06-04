import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formForDevelopers: FormGroup;

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
      developersEmail : new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
   }

  ngOnInit(): void {
  }

  send() {
    console.log(this.formForDevelopers);
  }

}
