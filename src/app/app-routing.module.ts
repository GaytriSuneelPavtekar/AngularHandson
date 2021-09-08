import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './Assignment/AngularRoutingAssignment/book-list/book-list.component';
import { TechnologyComponent } from './Assignment/AngularRoutingAssignment/technology/technology.component';
import { FirstComponent } from './LectureHandson/AngularRouting/first/first.component';
import { InvalidComponent } from './LectureHandson/AngularRouting/invalid/invalid.component';
import { SecondComponent } from './LectureHandson/AngularRouting/second/second.component';

const routes: Routes = [
  {path: '', component: TechnologyComponent},
  {path:'first', component: FirstComponent},
  {path:'second', component: SecondComponent},
  {path:'technology', component: TechnologyComponent},
  {path:'books', component: BookListComponent},
  {path: '**', component: InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
