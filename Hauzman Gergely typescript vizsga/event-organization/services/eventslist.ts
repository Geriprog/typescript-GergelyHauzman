import { Event } from "../Models/event";

export class EventList<T> {
  private events: Map<number, Event<T>> = new Map();

  addEvent(event: Event<T>): void {
    this.events.set(event.id, event);
    console.log(`Item added: ${event.id}`);
  }

  deleteEvent(id: number): void {
    this.events.delete(id);
    console.log (`Event removed ${id}`)
}

  listAllEvents(): Array<T>{
    return this.filter();
  }
}