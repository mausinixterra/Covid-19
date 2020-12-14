import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ComponentsModule } from './components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    NativeStorage,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
