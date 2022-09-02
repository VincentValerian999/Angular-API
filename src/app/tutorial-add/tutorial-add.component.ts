import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent implements OnInit {

  constructor() { }
  public title!: number;
  ngOnInit(): void {
  }

}
