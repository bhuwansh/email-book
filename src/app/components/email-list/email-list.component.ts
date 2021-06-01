import {  Component, OnInit } from '@angular/core';
import { EmailsService } from '../../services/emails.service';
import {  Emails, Industries} from '../../models/emails.model';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  Emails : Emails[]; // to get array list 
 Industries : Industries[];


  constructor(public emailService : EmailsService
    ) {


    }



  ngOnInit() {

this.emailService.getEmailsList().subscribe(res => {
  this.Emails = res.map(e => {
    return {
      id : e.payload.doc.id,
      ... e.payload.doc.data() as {} 
    } as Emails 
  })
});



this.emailService.getIndustriesList().subscribe(res => {
  this.Industries = res.map(e => {
    return {
      
      ... e.payload.doc.data() as {} 
    } as Industries
  })
});

    }
    

}
