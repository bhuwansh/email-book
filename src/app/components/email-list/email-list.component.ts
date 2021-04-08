import { Component, OnInit } from '@angular/core';
import { EmailsService } from '../../services/emails.service';
import { Emails} from '../../models/emails.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  Emails:Emails[];

  constructor(private EmailsService: EmailsService) {}



  ngOnInit() {

    this.EmailsService.getEmailsList().subscribe(data => {
        this.Emails = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          } as Emails;
        })
      });
    }

}
