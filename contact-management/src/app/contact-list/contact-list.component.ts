import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts:Contact[]=[];

  constructor(private contactService:ContactService){}

  ngOnInit(){
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts= contacts;
    });
  }
}
