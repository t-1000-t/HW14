import notepad from '../model';


export default function editNote({ target }) {
  if (target.textContent !== 'edit') return;
  const li = target.closest('.note-list__item');
  const title = li.querySelector('.note__title');
  const body = li.querySelector('.note__body');
  const note = notepad.findNoteById(li.dataset.id);

  if (!title.hasAttribute('contenteditable') || !title.getAttribute('contenteditable')) {
    title.setAttribute('contenteditable', true);
    body.setAttribute('contenteditable', true);
    note.title = title.textContent;
    note.body = body.textContent;

    li.style.boxShadow = '0px 0px 10px #3456f3';
    target.style.boxShadow = '0px 0px 10px 3px #1112f3';
    target.style.backgroundColor = '#dfsse2';
    target.style.borderRadius = '25px';
    return;
  };
  if (title.getAttribute('contenteditable')) {
    note.title = title.textContent;
    note.body = body.textContent;
    const update = {
      "id": li.dataset.id,
      "title": title.textContent,
      "body": body.textContent,
      "priority": note.priority,
    }
    notepad.updateNote(update.id, update);
    title.setAttribute('contenteditable', false);
    body.setAttribute('contenteditable', false);
    target.textContent = 'edit';
    li.removeAttribute('style');
    target.removeAttribute('style');
  };
};