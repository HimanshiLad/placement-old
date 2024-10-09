import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { company, DataService } from '../../data.service';
@Component({
  selector: 'app-addCompanyForm',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addCompanyForm.component.html',
  styleUrl: './addCompanyForm.component.css'
})
export class AddCompanyFormComponent {
  constructor(private dataService: DataService) {}

    company: company = {
      name: '',
      category: '',
      description: '',
    };
  isVisible = false;

  @Output() formClosed = new EventEmitter<void>();

  openForm() {
    this.isVisible = true;
  }

  closeForm() {
    this.isVisible = false;
    this.formClosed.emit(); // Optional: Emit an event when the form is closed
  }

  onSubmit() {
    // Handle form submission
      this.dataService.addCompany(this.company).subscribe(
      response => {
        console.log('Company added successfully', response);
      },
      error => {
        console.error('Error adding company', error);
      }
    );
    this.closeForm(); // Close form after submission
  }

  updateCategory(category: string) {
    this.company.category = category;
  }

}

