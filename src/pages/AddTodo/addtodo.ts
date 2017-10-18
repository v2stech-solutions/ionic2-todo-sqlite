import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})
export class AddTodoPage {

  id:any;
  title:any;
  description:any;

  addedToDo:any[]=[];

  addedToDoList = [];

  

  constructor(public navCtrl: NavController,private navParams: NavParams,public storage: Storage,private sqlite: SQLite) {
      
      this.storage = storage;
      if(navParams.data.todo != "undefined" && navParams.data.todo != null && navParams.data.todo != ""){
        this.id = navParams.data.todo.id;
        this.title = navParams.data.todo.title;
        this.description = navParams.data.todo.description;
      }
      
  } 

  saveRecords():void{
    
    this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db:SQLiteObject) =>{
          
           if(!this.id){
              this.insertRecord(db,this.title,this.description);
           }else{
              this.updateRecords(db,this.title,this.description)
           }
      })
    this.navCtrl.pop();
  }

  updateRecords(db,title,description){
    var query = "update todolist set title= ?, description= ? where id="+this.id;
    
    db.executeSql(query,[title,description]).then(
      (res) => console.log(res)
     )
    .catch(e => console.log(e));
     this.navCtrl.pop(HomePage);
  }

  insertRecord(db,title,description){
    db.executeSql('insert into todolist(title,description) values(?,?)',[title,description])
     .then(() => alert('Executed SQL'))
    .catch(e => console.log(e));

    this.title="";
    this.description="";
  }
  goBack():void{
     this.navCtrl.pop();
  }
}
