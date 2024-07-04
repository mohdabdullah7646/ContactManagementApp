import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})

export class ContactDetailsComponent implements OnInit {
  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContact(+id).subscribe(contact => {
        this.contact = contact;
      });
    }
  }
}
