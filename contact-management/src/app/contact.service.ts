import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contacts';
  //private apiUrl = 'assets/contacts.json';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact)
      .pipe(catchError(this.handleError));
  }

  updateContact(contact: Contact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${contact.id}`, contact)
      .pipe(catchError(this.handleError));
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Backend returned code ${error.status}, ` +
                     `body was: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }


}
