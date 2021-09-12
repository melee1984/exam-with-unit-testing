import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  title = 'app-todo-component';
  message = "";

  todos = [];
  public field = {
    task: "",
  }
  constructor(private httpService: HttpService) { }
  ngOnInit(): void {
      console.log('Initialize Todo App Component');
      this.fetchRecord();
  }
  fetchRecord() {
    this.httpService.get("todo").subscribe((res: any) => {
      this.todos = res.todos;
    },(error: any) => {
      alert("Error: Unable to connect to the server");
    });
  }
  addRecord() {
    if (this.validateInput()) {
      this.httpService.post("todo", this.field).subscribe((res: any) => {
        if (res.status) {
          this.field.task = "";
          this.fetchRecord();
        }
      },(error: any) => {
        alert("Error: Unable to connect to the server");
      });
    }
  } 
 deleteRecord(id: number) {
    var txt;
    var r = confirm("Are you sure want to delete this record?");
    if (r == true) {
      this.httpService.delete("todo/"+id).subscribe((res: any) => {
        if (res.status) {
          this.fetchRecord();
        }
      },(error: any) => {
        alert("Error: Unable to connect to the server");
      });

    } else {
      txt = "You pressed Cancel!";
    }
  }
  updateRecord(id: number) {
    this.httpService.put("todo/"+id).subscribe((res: any) => {
      if (res.status) {
        this.fetchRecord();
      }
    },(error: any) => {
      alert("Error: Unable to connect to the server");
    });
  }
  validateInput() {
    this.message = "";
    if (this.field.task=="") {
      this.message = "The task field is empty";
      return false;
    }
    return true;
  }

}
