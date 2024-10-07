import { TodoItem } from "../models/todoItem";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Item added: ${item.id}`);
  }

  removeProductById(id: number): void {
    this.items.delete(-TodoItem);
}

  listAllItems(){
    console.log (this.items);
  }
}
