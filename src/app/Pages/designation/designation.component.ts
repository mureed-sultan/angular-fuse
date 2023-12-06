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
    { srNo: 4, designationCode: 'D004', designationName: 'Analyst', status: 'Inactive' },
    { srNo: 5, designationCode: 'D005', designationName: 'Tester', status: 'Active' },
    { srNo: 6, designationCode: 'D006', designationName: 'Architect', status: 'Active' },
    { srNo: 7, designationCode: 'D007', designationName: 'Support Engineer', status: 'Inactive' },
    { srNo: 8, designationCode: 'D008', designationName: 'Product Manager', status: 'Active' },
    { srNo: 9, designationCode: 'D009', designationName: 'Scrum Master', status: 'Inactive' },
    { srNo: 10, designationCode: 'D010', designationName: 'UX Designer', status: 'Active' },
    { srNo: 11, designationCode: 'D011', designationName: 'Data Scientist', status: 'Inactive' },
    { srNo: 12, designationCode: 'D012', designationName: 'Security Analyst', status: 'Active' },
    { srNo: 13, designationCode: 'D013', designationName: 'DevOps Engineer', status: 'Active' },
    { srNo: 14, designationCode: 'D014', designationName: 'Technical Writer', status: 'Inactive' },
    { srNo: 15, designationCode: 'D015', designationName: 'Network Engineer', status: 'Active' },
    { srNo: 16, designationCode: 'D016', designationName: 'System Administrator', status: 'Inactive' },
    { srNo: 17, designationCode: 'D017', designationName: 'Business Analyst', status: 'Active' },
    { srNo: 18, designationCode: 'D018', designationName: 'Sales Representative', status: 'Active' },
    { srNo: 19, designationCode: 'D019', designationName: 'Marketing Specialist', status: 'Inactive' },
    { srNo: 20, designationCode: 'D020', designationName: 'HR Manager', status: 'Active' },
  ];
  

  filteredData: any[] = [...this.data];  // Initialize with the original data
  sortedColumn: string = '';
  isAscending: boolean = true;
  searchTerm: string = '';
  showModal: boolean = false;
  editedEntry: any = {}; // The entry being edited or added
  entriesPerPageOptions: number[] = [10, 25, 50];
  entriesPerPage: number = this.entriesPerPageOptions[0];
  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.filterData();
  }

  openModal(item?: any) {
    this.showModal = true;
    this.editedEntry = { ...item };
  }

  closeModal() {
    this.showModal = false;
  }

  saveEntry() {
    if (this.editedEntry.srNo) {
      const index = this.data.findIndex(item => item.srNo === this.editedEntry.srNo);
      if (index !== -1) {
        this.data[index] = { ...this.editedEntry };
      }
    } else {
      const newSrNo = this.data.length + 1;
      this.editedEntry.srNo = newSrNo;
      this.data.push({ ...this.editedEntry });
    }

    this.closeModal();
    this.filterData();
  }

  sort(column: string) {
    if (this.sortedColumn === column) {
      this.isAscending = !this.isAscending;
    } else {
      this.sortedColumn = column;
      this.isAscending = true;
    }

    this.filteredData.sort((a, b) => {
      const valueA = (a as any)[column];
      const valueB = (b as any)[column];

      if (valueA < valueB) {
        return this.isAscending ? -1 : 1;
      } else if (valueA > valueB) {
        return this.isAscending ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.applyPagination();
  }

  filterData() {
    this.filteredData = this.data.filter(item => {
      return Object.values(item).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(this.searchTerm.toLowerCase());
        }
        return false;
      });
    });

    this.applyPagination();
  }

  
  getPagesArray(): number[] {
    const totalPages = Math.ceil(this.filteredData.length / this.entriesPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  changeEntriesPerPage() {
    this.currentPage = 1;
    this.applyPagination(); 
    this.filterData();
  }
  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.filterData();
  }
  applyPagination() {
    const startIndex = (this.currentPage - 1) * this.entriesPerPage;
    const endIndex = startIndex + this.entriesPerPage;
    this.filteredData = this.filteredData.slice(startIndex, endIndex);
  }
  
  

}
