import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, FormArray, Validators, FormsModule, FormBuilder, Form, NgForm  } from '@angular/forms';

import { EncryptionService } from './services/encryption.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kms';
  form: FormGroup;
  public model: any;

  constructor(
    private encrypService: EncryptionService,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ){}
  
  ngOnInit(): void{
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  onInsert() {
    console.log(this.form);
    this.encrypService.create(this.form.value);
      
  }
}
