export default class StorageManager {
  static getLocStore() {
    if ((localStorage.getItem('todos')) === null || (localStorage.getItem('todos')) === 'undefined') {
      return [];
    }
    return JSON.parse(localStorage.getItem('todos'));
  }

  static setLocStore(arr) {
    localStorage.setItem('todos', JSON.stringify(arr));
  }
}