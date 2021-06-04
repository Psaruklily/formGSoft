import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tehnology } from '../Tehnologys';
import { Hobby } from '../hobby';
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
  hobby: Hobby;
  hobbys: Hobby[] = [];

  constructor(private dataService: DataService) { 
    this.formForDevelopers = new FormGroup({
      developersName : new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]).{2,}')
      ]),
      developersSurname : new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]).{2,}')
      ]),
      developersBirthday: new FormControl('', Validators.required),
      developersEmail : new FormControl('', [
        Validators.required,
        Validators.email,
        this.developerEmailValidator
      ]),
      selectTehnology: new FormControl('', Validators.required),
      selectVersion: new FormControl('', Validators.required),
      hobbys: new FormControl('', Validators.required),
      // hobbyDuration: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.tehnologys = this.dataService.getTehnologys();
  }

  send() {
    console.log(this.formForDevelopers);
    this.hobbys.push(new Hobby(this.hobby.name, this.hobby.duration))
  }

  changeModelOfSelect(val):void {
    this.periodOptions = val.version;
  }

  developerEmailValidator(control: FormControl): {[s: string]: boolean}|null {
    if(control.value === 'test@test.test') {
      return {'developersEmail': true}
    }
    return null;
  }
}


