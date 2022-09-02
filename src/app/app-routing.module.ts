import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialAddComponent } from './tutorial-add/tutorial-add.component';
import { TutorialDetailComponent } from './tutorial-detail/tutorial-detail.component';

const routes: Routes = [ { path: 'tutorials-list', component: TutorialListComponent },
{ path: 'add-tutorial', component: TutorialAddComponent }, 
{ path: 'tutorial-detail', component: TutorialDetailComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
