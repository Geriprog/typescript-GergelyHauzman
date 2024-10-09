import {Event} from "./Models/event";
import { Participant } from "./Models/participants";
import { EventList } from "./services/eventslist";
import { ParticipantList } from "./services/guestslist";



const event1 = new Event (1, "2025.06.24", "Birthday", "content" );
const event2 = new Event (2, "2025.08.12", "Concert", "content" );

const participant1 = new Participant (1, "Ildikó", "woman", "content" );
const participant2 = new Participant (2, "János", "man", "content" );
const participant3 = new Participant (3, "Géza", "man", "content" );
const participant4 = new Participant (4, "Eszter", "woman", "content" );
