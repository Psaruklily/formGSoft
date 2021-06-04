import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tehnology } from '../Tehnologys';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formForDevelopers: FormGroup;
  selectedObject: Tehnology;
  tehnologys: Tehnology[];
  periodOptions = [];

  constructor(private dataService: DataService) { 
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
   }

  ngOnInit(): void {
    this.tehnologys = this.dataService.getTehnologys();
  }

  send() {
    console.log(this.formForDevelopers);
  }

  changeModelOfSelect(val):void {
    this.periodOptions = val.version;
  }
}


