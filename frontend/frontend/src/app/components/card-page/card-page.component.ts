import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DataService } from '../../data.service';
import { AddCompanyFormComponent } from '../addCompanyForm/addCompanyForm.component';
import { CardComponent } from '../card/card.component';
import { TopicListComponent } from '../topic-list/topic-list.component';

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [CardComponent, MatIconModule, RouterModule, AddCompanyFormComponent, CommonModule, TopicListComponent],
  providers:[DataService],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})

export class CardPageComponent {
  constructor(private dataService: DataService) {}

  superdream: any[]=[];
  dream: any[]=[];
  nondream: any[]=[];

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList(): void {
    const categories = ['Super Dream', 'Dream', 'Non Dream'];

    this.dataService.getCompanyList(categories).subscribe((data) => {
      
      this.superdream = data[0] || [];  // First category list
      this.dream = data[1] || [];  // Second category list
      this.nondream = data[2] || [];  // Third category list

    });
  }

  @ViewChild(AddCompanyFormComponent) addCompanyFormComponent!: AddCompanyFormComponent;
  
  public setcategory(category: string): void{
    this.addCompanyFormComponent.updateCategory(category);
  }
  
}