import { Component } from '@angular/core';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent {
  data = [
    { srNo: 1, designationCode: 'D001', designationName: 'Manager', status: 'Active' },
    { srNo: 2, designationCode: 'D002', designationName: 'Developer', status: 'Inactive' },
    { srNo: 3, designationCode: 'D003', designationName: 'Designer', status: 'Active' },
    // Add more demo data if needed
  ];
}
