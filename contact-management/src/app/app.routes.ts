import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {path: '', component: ContactListComponent},
    {path: 'contact/:id', component: ContactDetailsComponent},
    {path: 'add', component: ContactFormComponent},
    {path: 'edit/:id', component: ContactFormComponent},
    {path: 'delete/:id', component: ContactFormComponent}
];
