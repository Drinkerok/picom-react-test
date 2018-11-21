import {Actions, Status} from './../components/constants';
import {OrderedMap, Record} from 'immutable';
import {arrayToMap} from './../utils';


const StateRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
});

const TodoRecord = Record({
  id: null,
  name: '',
  done: false,
});


export default (todoState = new StateRecord(), action) => {
  const {type, payload, randomId, data, error} = action;

  switch (type) {
    case Actions.ADD_ITEM:
      return todoState.setIn(['entities', randomId], {
        id: randomId,
        name: payload.name
      });

    case Actions.DELETE_ITEM:
      return todoState.deleteIn(['entities', payload.id]);


    case Actions.CHANGE_ITEM_STATUS:
      return todoState.setIn(['entities', payload.id, 'done'], payload.status);


    case Actions.LOAD_ALL_ITEMS + Status.START:
      return todoState.set('loading', true);

    case Actions.LOAD_ALL_ITEMS + Status.SUCCESS:
      return todoState
        .set('loading', false)
        .set('loaded', true)
        .set('entities', arrayToMap(data, TodoRecord));

    case Actions.LOAD_ALL_ITEMS + Status.FAIL:
      console.log(`Ошибка ${Actions.LOAD_ALL_ITEMS}: `, error);
      return todoState.set('loading', false);
  }


  return todoState
}