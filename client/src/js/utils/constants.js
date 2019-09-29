export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена 🎉',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора',
};

const refs = {
  list: document.querySelector('.note-list'),
  form: document.querySelector('#note-editor-form'),
  title: document.querySelector('input[name="note_title"]'),
  body: document.querySelector('textarea[name="note_body"]'),
  inputFilter: document.querySelector('.search-form__input'),
  addButton: document.querySelector('.page-header__button'),
  changePriorytyMore: document.querySelector('.note__section'),
};

export default refs;
