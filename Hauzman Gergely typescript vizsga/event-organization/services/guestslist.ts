import { Participant } from "../Models/participants";

export class ParticipantList<T> {
  private participants: Map<number, Participant<T>> = new Map();

  addParticipant(participant: Participant<T>): void {
    this.participants.set(participant.id, participant);
    console.log(`Item added: ${participant.id}`);
  }

  deleteParticipant(id: number): void {
    this.participants.delete(id);
    console.log (`Event removed ${id}`)
}

  listAllParticipants(): Array<T>{
    return this.filter();
  }
}