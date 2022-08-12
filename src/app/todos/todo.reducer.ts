import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo-model';
import { crear, editar, toggle } from './todo.actions';

export const estadoInicial:Todo[] = [
    new Todo('Comprar una nueva PC'),
    new Todo('Comprar un nuevo celular'),
    new Todo('Comprar medias'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on( crear,  ( state, { texto } ) => [...state, new Todo( texto )] ),
  
  on( toggle, ( state, { id } ) => {
    
    return state.map( todo => {
      
      if(todo.id === id) {

        return {
          ...todo,
          completado: !todo.completado
        }

      }else {

        return todo;
      }
    });

  }),
  
  on( editar, ( state, { id, texto } ) => {
    
    return state.map( todo => {
      
      if(todo.id === id) {

        return {
          ...todo,
          texto: texto
        }

      }else {

        return todo;
      }
    });

  }),
);