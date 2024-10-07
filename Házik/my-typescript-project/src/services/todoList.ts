import { TodoItem } from "../models/todoItem";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Item added: ${item.id}`);
  }

  removeProductById(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
}

  listAllItems(): TodoItem [] {
    console.log(this.items);
  }
}