import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

interface Topic {
  id: number;
  name: string;
  category: string;
  companyId: number;
}

@Component({
  selector: 'app-addQuestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './addQuestion.component.html',
  styleUrl: './addQuestion.component.css'
})

export class AddQuestionComponent {

  @Input() category: string = '';
  @Input() companyId: number = 0;
  @Input() value: string = '';

  isVisible = false;
  topicList: Topic[]=[];
  selectedOption : string='';
  showOtherInput = false;
  otherOption = '';
  question='';

  constructor(private route: ActivatedRoute, private dataService: DataService,) {}

  @Output() formClosed = new EventEmitter<void>();

  ngOnInit(){
    this.topicList = this.dataService.getTopics();
    this.companyId = this.route.snapshot.params['companyId'];
    this.value = this.route.snapshot.params['value'];
    this.category = this.route.snapshot.params['category'];
    this.openForm();
  }

  openForm() {
    this.isVisible = true;
  }

  closeForm() {
    this.isVisible = false;
    this.formClosed.emit(); // Optional: Emit an event when the form is closed
  }

  onSubmit() {
    if (this.otherOption.trim()){
      let topic={
         name: this.otherOption,
         category: this.category,
         companyId: this.companyId,
      }
      if (this.value === 'Internship'){
      this.dataService.addTopic(topic).subscribe(
        (response : Topic)=> {
          this.add(response.id);
        }
      );
    }
    else{
      this.dataService.addPlacementTopic(topic).subscribe(
        (response : Topic)=> {
          this.add(response.id);
        }
      );
    }
      this.closeForm();
    }
    
    else {
      this.add(+(this.selectedOption));
  }
    this.closeForm(); // Close form after submission
    }

  add(selectedOption: number){
    let Question={
      question: this.question,
      topicId: selectedOption,
    }
    if (this.value === 'Internship'){
    this.dataService.addQuestion(Question).subscribe(response => {
    });
  }
  else{
    this.dataService.addPlacementQuestion(Question).subscribe(response => {
    });
  }
  }
  onOptionChange() {
    this.showOtherInput = this.selectedOption === '0';
  }

}