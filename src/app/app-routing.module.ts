import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ExtraComponent } from './extra/extra.component';
import { PokeApiCallComponent } from './poke-api-call/poke-api-call.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'poke-api-call', component: PokeApiCallComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'profile-editor', component: ProfileEditorComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'extra', component: ExtraComponent },

  // redirect to home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }