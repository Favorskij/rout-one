import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {PageErrComponent} from "./page-err/page-err.component";
import {PageRediComponent} from "./page-redi/page-redi.component";

const routes: Routes = [

  // Страница /one
  {path: 'one', component: PageOneComponent},

  // Страница /two
  {path: 'two', component: PageTwoComponent},

  // Страница  redi
  {path: 'redi', component: PageRediComponent},
  // Перенаправление из главное страницы на страницу redi
  {path: '', redirectTo: '/redi', pathMatch: 'full'},


  // 404. Если не одного пути на найдено для сопоставления, то будет вызван этот компонент.
  {path: '**', component: PageErrComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
