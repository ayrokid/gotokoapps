import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Welcome } from '../pages/welcome/welcome';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Welcome,
    Home,
    Login
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Welcome,
    Home,
    Login
  ],
  providers: []
})
export class AppModule {}
