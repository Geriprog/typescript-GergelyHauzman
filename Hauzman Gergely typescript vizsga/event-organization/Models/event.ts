export class Event<T> {

  constructor(public id: number, public date: string, public name: string, public content: T) {
    this.id = id;
    this.date = date;
    this.name = name;
    this.content = content;
  }
}