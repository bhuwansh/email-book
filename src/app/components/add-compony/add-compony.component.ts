import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Emails} from 'src/app/models/emails.model';
import { EmailsService} from '../../services/emails.service';

@Component({
  selector: 'app-add-compony',
  templateUrl: './add-compony.component.html',
  styleUrls: ['./add-compony.component.css']
})
export class AddComponyComponent implements OnInit {



  public companyForm : FormGroup;

  
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
    
    
  

ngOnInit(): void {
   
  }


 onSubmit() {

        debugger;
        this.EmailService.createEmail(this.companyForm.value).then(() => {
          alert('Created new item successfully!');        
        }); 
    }
}
