import { ChatComponent }        from './pages/chat/chat.component';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }       from './pages/login/login.component';

const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
