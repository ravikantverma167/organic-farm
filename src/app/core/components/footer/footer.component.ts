import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerSections: any[] = [];
  socialLinks: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.footerSections = [{
      title: 'About us',
      links: ['About Organic Farm', '100% vegan', 'Naturally', 'Ecologically']
    },
    {
      title: 'Your account',
      links: ['Your orders', 'Loyality program', 'Account settings', 'Store']
    },
    {
      title: 'Payments and delivery',
      links: ['Free shipping', 'Zero waste shipments', 'Payments', 'Shipping and returns']
    },
    {
      title: 'Contacts',
      links: ['Contact & Cooperation', 'Terms of use', 'Payments', 'Privacy policy']
    }];

    this.socialLinks = [{
      icon: 'fab fa-facebook-f'
    },
    {
      icon: 'fab fa-twitter'
    },
    {
      icon: 'fab fa-instagram'
    }]

  }

}
