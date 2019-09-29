import { Notyf } from 'notyf';
import notepad from '../model';
// eslint-disable-next-line import/no-duplicates
import refs from '../../utils/constants';
import addListItem from '../view/addListItem';
// eslint-disable-next-line import/no-duplicates
import { NOTIFICATION_MESSAGES } from '../../utils/constants';

const notyf = new Notyf();

function addNote(e) {  
  e.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    notyf.error({
      message: NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY,
      duration: 3000,
      icon: false,
    });
    return;
  }
  const note = {
    title,
    body,
    priority: 0,
  };
  notepad.save(note).then(() => {
    // notepad.saveLocalStorage(notepad.notes);
    addListItem(refs.list, note);
  });
  e.target.reset();
  notyf.success({
    message: NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS,
    duration: 3000,
    icon: true,
  });
}
export default addNote;
