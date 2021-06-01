import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Countries, Emails, Industries} from 'src/app/models/emails.model';
import { EmailsService} from '../../services/emails.service';

@Component({
  selector: 'app-add-compony',
  templateUrl: './add-compony.component.html',
  styleUrls: ['./add-compony.component.css']
})
export class AddComponyComponent implements OnInit {



  public companyForm : FormGroup;

  Industries : Industries[];
  Countries : Countries[];
  constructor(public EmailService : EmailsService, public fb: FormBuilder
    
    ) {

this.companyForm = this.fb.group({

  category:[''],
    companyDetails: [''],
    companyname: [''],
    email: [''],
    location:[''],
    logo: [''],
    website:[''],
phone:[''],
status : false,
})

     }
    
    
  

ngOnInit() {

  this.EmailService.getIndustriesList().subscribe(res => {
    this.Industries = res.map(e => {
      return {        
        ... e.payload.doc.data() as {} 
      } as Industries
    })
  });

  this.EmailService.getCountriesList().subscribe(res => {
    this.Countries = res.map(e => {
      return {        
        ... e.payload.doc.data() as {} 
      } as Countries
    })
  });
   
  }


 onSubmit() {

        debugger;
        this.EmailService.createEmail(this.companyForm.value).then(() => {
          alert('Created new item successfully!');        
        }); 
    }
}
