import { Injectable } from '@angular/core';
import { Journal } from '../models/Journal';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  journals: object;

  constructor() {
    this.journals = {
    };
  }

  getJournals(): object {
    return this.journals;
  }

  addJournal(journal: Journal) {
    this.journals[journal.id] = journal;
    console.log(this.journals);
  }

  getCounter(): number {
    return parseInt(localStorage.getItem('counter'), 10);
  }

  updateCounter(counter: number) {
    localStorage.setItem('counter', counter.toString());
  }

  setCounter() {
    if (localStorage.getItem('counter') === null) {
      localStorage.setItem('counter', '1000000000');
    }
  }
}
