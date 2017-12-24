import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule, LoadingController} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';

import {CheckIn1} from '../pages/check_in/check_in_1';
import {CheckIn2} from '../pages/check_in/check_in_2';
import {CheckOut} from '../pages/check_out/check_out';
import {MainPage} from '../pages/main/main';
import {WelcomePage} from '../pages/welcome/welcome';

import {MyApp} from './app.component';
import {ConfigService} from './config.service';
import {UserService} from './user.service';

@NgModule({
  declarations: [MyApp, MainPage, CheckIn1, CheckIn2, CheckOut, WelcomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, WelcomePage, CheckIn1, CheckIn2, CheckOut, MainPage],
  providers: [
    StatusBar, SplashScreen, ConfigService, UserService, LoadingController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
