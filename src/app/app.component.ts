import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Basil is here';
  public user: User = new User();

  submit(){
    console.log(this.user);
  }




  showData($event: any){
    console.log("button is clicked!");
    if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}

