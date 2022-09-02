import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/model/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  public tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  selectedTutorial:Tutorial = new Tutorial();

  constructor(
    private tutorialService: TutorialService
  ) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  selectTutorial(tutorial: Tutorial){
    this.selectedTutorial = tutorial;
  }

  refreshList(): void{
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  updateTutorial(){
    this.tutorialService.update(this.selectedTutorial.id, this.selectedTutorial).subscribe({
      next: (data) => {
        console.log(data);
        this.retrieveTutorials;
      },
      error: (e) => console.error(e)
    }
    );
  }
  setActiveTutorial(tutorial: Tutorial, index: number): void{
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  deleteTutorial() {
    this.tutorialService.delete(this.selectedTutorial.id).subscribe(
      data => {
        console.log(data);
        this.retrieveTutorials();  
      },
      error => {
        console.log(error);
        
      }
    )
  }
 /*searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
*/
  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}
