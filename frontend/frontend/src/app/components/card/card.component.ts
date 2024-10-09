import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

interface company {
  id : number;
  name: string;
  category: string;
  description: string;
}
interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  topics: Topic[]= [];

  @Input() company!: company;
  value='';
  constructor(private router: Router, private dataService: DataService) {}

click(value: string) {
  this.router.navigate(['/topic-list', this.company.id, value]);
}


}
