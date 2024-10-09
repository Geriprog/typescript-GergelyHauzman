export class Participant<T> {

  constructor(public id: number, public name: string, public sex: string, public content: T) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.content = content;
  }
}