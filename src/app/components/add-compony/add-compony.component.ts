import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Emails } from 'src/app/models/emails.model';
import { EmailsService} from '../../services/emails.service';

@Component({
  selector: 'app-add-compony',
  templateUrl: './add-compony.component.html',
  styleUrls: ['./add-compony.component.css']
})
export class AddComponyComponent implements OnInit {

  constructor(private EmailService : EmailsService
  
  ) { }

  public companyForm : FormGroup;

public Email : Emails;

  ngOnInit(): void {
  }

  submitCompanyData() {

// this.EmailService.createEmail(Emails)

    // this.crudApi.AddStudent(this.studentForm.value); // Submit student data using CRUD API
    // this.toastr.success(this.studentForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    // this.ResetForm();  // Reset form when clicked on reset button
  alert('done');
  };

// Accessing form control using getters
get CompanyName() {
  return this.companyForm.get('CompanyName');
}

get CompanyEmail() {
  return this.companyForm.get('CompanyEmail');
}  

get website() {
  return this.companyForm.get('website');
}

get logo() {
  return this.companyForm.get('logo');
}
get phone() {
  return this.companyForm.get('phone');
}
get Industry() {
  return this.companyForm.get('Industry');
}
get location() {
  return this.companyForm.get('location');
}
get companydetails() {
  return this.companyForm.get('companydetails');
}






}
