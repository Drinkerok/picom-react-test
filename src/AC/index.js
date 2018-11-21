import {Actions, Status, API} from './../components/constants';


export function addItem(name) {
  return {
    type: Actions.ADD_ITEM,
    payload: {name},
    generateId: true,
  }
}

export function deleteItem(id) {
  // при работе с сервером, тут можно было добавить callAPI
  // а со странице удалять только при хорошем ответе сервера
  return {
    type: Actions.DELETE_ITEM,
    payload: {id}
  }
}

export function changeItemStatus({id, status}) {
  // ну тут та же история, что и с deleteItem
  return {
    type: Actions.CHANGE_ITEM_STATUS,
    payload: {id, status}
  }
}

export function loadTodoItems() {
  return {
    type: Actions.LOAD_ALL_ITEMS,
    callAPI: API.ITEMS,
  }
}