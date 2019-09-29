import * as api from '../apiService/api';

export default class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }

    get() {
      return api.getNotes().then(notes => {
        this._notes = notes;
        return this._notes;
      })
    }

    save(note) {
      return api.saveNote(note).then(note => {
        this._notes.push(note);
        return this._notes;
      })
    }

    removeListItem(id) {
      return api.deleteNote(id).then(() => this._notes = this._notes.filter(el => el.id !== id));
    }
    
    updateNote(note) {
      return api.updatePutNote(note).then(note => {
        this._notes = note;
        return this._notes;
      })
    }

    filterNotesByQuery(query) {
      return this._notes.filter(el =>
        el.title.toLowerCase().includes(query.toLowerCase()) ||
        el.body.toLowerCase().includes(query.toLowerCase()));
    }

    filterNotesByPriority() {
      return this._notes.sort((a, b) => b.priority - a.priority);
    }
  
    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    }
  }
  
