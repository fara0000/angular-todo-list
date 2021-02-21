import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoActions } from '../../actions';
import { map } from 'rxjs/operators';
import { createTask } from './todo';

// Эффекты нам нужны для асинхронных действий перед взаимодействием со стором
// создаётся эффект с помошью метода createEffect, который принимает в себя функцию колбек, которая на return сделает dispatch*
// (если вы не хотите делать dispatch на return нужно добавить после закрывающей скобки pipe объект
// с конфигурауией а именно { dispatch: false })
// чтоб повесить слушатель на какой-либо action нам нужно в кострукторе приватным свойством добавить actions$ и
// типизировать его Action из самой бибибиотеки @ngrx/effects
// после в функции callback у createEffect поставит прослушка на данное поле и в pipe указать ofType
// ofType принимает в себя action который будет прослушиваться сработает данный эффект
// дальше воспольживавшись методом map мы забирает значение из action, его payload - это те данные которые мы сюда отправили
// дальше мы можем прописать свою логику приложения в данном случае мы создаём объект с таской и на return у нас
// сработает action который сетит в стор данную таску.

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions) {}

  addNewTask = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.createTask),
      map(action => action.payload),
      map((payload: string) => {
        const task = createTask(payload);

        return TodoActions.addNewTaskStore({ payload: task });
      }),
    )
  );
}
