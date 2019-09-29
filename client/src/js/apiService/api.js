import 'core-js/stable';
import 'regenerator-runtime/runtime';


const URL = 'http://localhost:3330/notes';


async function getNotes() {
  try {
    const link = await fetch(URL);
    const resp = await link.json();
    return resp;
  } catch (err) {
    throw (err);
  }
}


async function deleteNote(id) {
  try {
    const option = {
      method: 'DELETE',
    };
    const url = await fetch(`${URL}/${id}`, option);
    const resp = await url.json();
    return resp;
  } catch (err) {
    throw (err);
  }
}


async function saveNote(data) {
  try {
    const body = JSON.stringify(data);
    const option = {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }
    const dataLink = await fetch(URL, option);
    const resp = await dataLink.json();
    return resp;
  } catch (err) {
    throw (err);
  }
}


async function updatePutNote(id, data) {
  try {
    const body = JSON.stringify(data);
    const option = {
      method: "PUT",
      body,
      headers: {
        "Content-Type": "application/json"
      }
    }
    const url = await fetch(`${URL}/${id}`, option);
    const resp = await url.json();
    return resp;
  } catch (err) {
    throw (err);
  }
}

function findNoteId(id) {
  return fetch(URL + `/${id}`)
    .then(response => response.json())
    .catch(console.warn);
}

export { getNotes, saveNote, deleteNote, updatePutNote }
