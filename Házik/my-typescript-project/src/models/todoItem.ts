export class TodoItem<T> {

  constructor(public id: number, public content: T) {
    this.id = id;
    this.content = content;
  }
}