import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Emails}  from '../models/emails.model';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private firestore : AngularFirestore) { }
  
  //get all email list with details
  getEmailsList(){
    
    return this.firestore.collection('emails').snapshotChanges(); 
// , x => x.where('status', '==', true)
 
  }





  // add new email with company details 
  createEmail(email : Emails) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("emails")
        .add(email)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }



  updateEmaildetails(Emails : Emails)
  { delete Emails.id;
    this.firestore.doc('emails/' + Emails.id).update(Emails); 
  }

  deleteEmail(EmailId: string){
    this.firestore.doc('emails/' + EmailId).delete();
}

}

