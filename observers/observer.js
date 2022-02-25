export class Observer {
  constructor() {
    this.observers = {};
  }
  addObserver(obj) {
    const id = Math.random();
    this.observers[id] = obj;
    return id;
  }

  removeObserver(id) {
    delete this.observers[id];
  }

  notify(event, ...args) {
    Object.values(this.observers).forEach((obj) => {
      if (event in obj) {
        obj[event](...args);
      }
    });
  }
}
