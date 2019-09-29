import showMicroModal from './utils/libraries';
import refs from './utils/constants';
import deleteNote from './mvc/controller/deleteNote';
import editNode from './mvc/controller/editNote';
import filterNote from './mvc/controller/filterNote';
import addNote from './mvc/controller/addNote';
import changePriority from './mvc/controller/changePriority';
import notepad from './mvc/model';
import renderNoteList from './mvc/renderNoteList';
import 'notyf/notyf.min.css';


refs.form.addEventListener('submit', addNote);
refs.addButton.addEventListener('click', showMicroModal);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNode);
refs.list.addEventListener('click', changePriority);
refs.inputFilter.addEventListener('input', filterNote);


// renderNoteList(refs.list, getLocStor());
notepad.get().then(notes => {
  renderNoteList(refs.list, notes);
})
