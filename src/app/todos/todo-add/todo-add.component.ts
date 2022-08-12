import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addForm: FormControl;

  constructor(private store: Store<AppState>) { 

    this.addForm = new FormControl('',Validators.required);
  }

  ngOnInit(): void {
  }

  agregar() {

    if(this.addForm.valid) {

      this.store.dispatch( actions.crear( {texto: this.addForm.value} ) );
    }

    this.addForm.reset();
  }

}
