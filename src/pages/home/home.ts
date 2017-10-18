import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AddTodoPage } from '../AddTodo/addtodo';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addedToDoList:any[] = [];
  tempTodos:any = '';
  sqlstorage : any  = null ;
   items=[];


  todoPage = AddTodoPage;
  constructor(public navCtrl: NavController,private navParams: NavParams,public storage: Storage,private sqlite: SQLite) {
     console.log("Inside constructor");
  }

    ngOnInit():void{

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db:SQLiteObject) =>{
           this.fetchRecords(db)
      })
    }

    fetchRecords(db){
      db.executeSql('select * from todolist', {}).then((data) => {
      this.addedToDoList = [];
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
            this.addedToDoList.push({id: data.rows.item(i).id,title: data.rows.item(i).title,description: data.rows.item(i).description});
        }

      }
    })
    }

    ionViewWillEnter(){
          
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db:SQLiteObject) =>{
           this.fetchRecords(db)
      })
         
    } 

  goToAddTodo():void{
      this.navCtrl.push(AddTodoPage);
  }
  deleteItem(todo,i):void{
    this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db:SQLiteObject) =>{
           this.removeItem(db,todo,i);
      })
  }

  editItem(todo,i):void{
    this.navCtrl.push(AddTodoPage,{todo,index:i});
  }

  

  removeItem(db,todo,i):void{
    var query = "delete from todolist where id ='"+ todo.id +"'"
    db.executeSql(query)
     .then(() => console.log(query),
     alert(todo.title))
    .catch(e => console.log(e));

     this.fetchRecords(db);
  }
}
