import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialAddComponent } from './tutorial-add/tutorial-add.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialAddComponent,
    TutorialDetailComponent,
    TutorialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
