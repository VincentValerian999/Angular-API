import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  public title:string  = "refat";
  public mode: string = 'Dark Mode';
  public canShow: boolean = true;
  theme = "lightMode";
  button = "button4";
  constructor() { }
  ngOnInit() {
    this.title = "Expense Entry"
  }
  toggleDarkMode(){
    this.button == "button4"? this.button = "button5" : this.button = "button4";
    this.theme == "lightMode"? this.theme = "darkMode" : this.theme = "lightMode";
    this.mode == "Dark Mode"? this.mode = "Light Mode" : this.mode = "Dark Mode";
  }

}
