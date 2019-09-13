import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import { DonsangPage } from '../pages/donsang/donsang';
import { QuizhePage } from '../pages/quizhe/quizhe';
import { QuizfePage} from '../pages/quizfe/quizfe';
import { DevdonneurPage } from '../pages/devdonneur/devdonneur';
import { ActufoPage } from '../pages/actufo/actufo';
import { LoginPage} from '../pages/login/login';
import { InscripPage } from '../pages/inscrip/inscrip';
/*import { Quicard } from '../services/quiz.service'; --import pour service ts*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DonsangPage,
    QuizhePage,
    QuizfePage,
    DevdonneurPage,
    ActufoPage,
    LoginPage,
    InscripPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
 

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InscripPage,
    TabsPage,
    DonsangPage,
    QuizhePage,
    QuizfePage,
    DevdonneurPage,
    ActufoPage,
    LoginPage
  ],
  providers: [
    /*Quicard, ---pour service */ 
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
