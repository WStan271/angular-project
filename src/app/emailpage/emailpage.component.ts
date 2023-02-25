import { Component } from '@angular/core';
declare let Email:any;

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailpageComponent {
  sendEmail() {
    Email.send({
  SecureToken : "0507c5de-4154-413b-9cf8-0b2ac01dc3cf",
  To : 'StanDemoApps@gmail.com',
  From : "StanDemoApps@gmail.com",
  Subject : "Security Token",
  Body : "First attempt with angular email"
}).then(
 alert("Email sent!")
);
   
}
}
