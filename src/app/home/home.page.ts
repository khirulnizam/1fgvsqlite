import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClientModule , HttpHeaders} from '@angular/common/http';
import { DbcrudService } from '../services/dbcrud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mainForm: FormGroup;//hold data from formgroup

  constructor(
    private crud: DbcrudService,
    public formBuilder: FormBuilder,
    private http:HttpClientModule ,
  ) {
    this.mainForm = this.formBuilder.group({
      nameVal: [''],//reset data form
      emailVal: [''],
      })
  }
  ionViewDidEnter() {  
    this.crud.getAllUsers()
  }

  createUser(){
    this.crud.addItem(this.mainForm.value.nameVal, this.mainForm.value.emailVal);
  }

}
