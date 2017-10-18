import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { HomePage } from '../pages/home/home';
const win: any = window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  sqlstorage: SQLite;
  items = [];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sqlite: SQLite) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  ngOnInit():void{
      
     
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
.then((db: SQLiteObject) => {
      this.createTables(db);
  })

}

    createTables(db){
      //data insert section
      db.executeSql('CREATE TABLE IF NOT EXISTS todolist(id INTEGER PRIMARY KEY AUTOINCREMENT,title,description)', {})
      .then(() => 
        console.log("Executed")
      ).catch(e => console.log(e));
     
    }
}

