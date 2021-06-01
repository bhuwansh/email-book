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
    
    return this.firestore.collection('emails', x => x.where('status', '==', true)).snapshotChanges(); 
// , x => x.where('status', '==', true)
 
  }


  getIndustriesList(){
    return this.firestore.collection("industries", x => x.orderBy('id', 'asc')).snapshotChanges();
  }

  getCountriesList(){
    return this.firestore.collection("countries", x => x.orderBy('id', 'asc')).snapshotChanges();
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

