import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  @Input() contact?: Contact;
  @Output() save = new EventEmitter<Contact>();
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getContact(+id).subscribe(contact => {
        this.contact = contact;
        this.contactForm.patchValue(contact);
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact = { ...this.contact, ...this.contactForm.value };
      if (this.contact) {
        this.contactService.updateContact(contact).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.contactService.createContact(contact).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }



  // ngOnChanges(){
  //   if(this.contactForm.valid){
  //     this.save.emit(this.contactForm.value);
  //   }
  // }


}
