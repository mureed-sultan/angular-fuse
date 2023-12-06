// employee-information.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent {
  formData: any = {};

  formFields: any[] = [
    {
      sectionTitle: 'Personal Information',
      fields: [
        { type: 'composite', name: 'fullName', label: 'Full Name', subfields: ['firstName', 'lastName'] },
        { type: 'text', name: 'cnic', label: 'CNIC' },
        { type: 'select', name: 'gender', label: 'Gender', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
        { type: 'number', name: 'contact', label: 'Contact' },
        { type: 'number', name: 'econtact', label: 'Emergency Contact' },
        { type: 'email', name: 'email', label: 'Email' },
        { type: 'date', name: 'birth', label: 'Birth Date' },
        { type: 'composite', name: 'address', label: 'Address', subfields: ['city', 'state', 'zipCode'] },
        { type: 'text', name: 'martial', label: 'Marital Status' }
      ]
    }
  ];
}
