import notepad from '../model';
import renderNoteList from '../renderNoteList';
import refs from '../../utils/constants';

const filterNote = ({ target }) => {
  renderNoteList(refs.list, notepad.filterNotesByQuery(target.value));
  const getFilterValue = notepad.filterNotesByQuery(target.value);
  if (refs.inputFilter.value !== '') {
    notepad.saveLocalStorage(getFilterValue);
  }
};

export default filterNote;
