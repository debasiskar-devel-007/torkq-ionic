import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Splashscreen} from 'ionic-native';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //StatusBar.statusbarPadding=false;
      if (Splashscreen) {
        setTimeout(() => {
          Splashscreen.hide();
        }, 100);
      }

      if (StatusBar) {
        // hide StatusBar using cordova-plugin-statusbar
        setTimeout(() => {
          StatusBar.backgroundColorByHexString("#ffaf36")
        },100);
      }
    });
  }
}



ionicBootstrap(MyApp);
//initializeApp();