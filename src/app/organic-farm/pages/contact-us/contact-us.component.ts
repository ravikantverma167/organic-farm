import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  message: {
    name: string,
    email: string,
    body: string,
  } = {
      name: '',
      email: '',
      body: ''
    }

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    if (!this.message.email || !this.message.name) {
      return;
    }
    this.message = {
      name: '',
      email: '',
      body: ''
    }
    alert('Email sent successfully, We will reach you shortly')

  }

}
