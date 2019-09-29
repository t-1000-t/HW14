import createListItem from './view/createListItem';

export default function renderNoteList(Refs, notes) {
  Refs.innerHTML = '';
  return Refs.append(...notes.map(e => createListItem(e)));
}
