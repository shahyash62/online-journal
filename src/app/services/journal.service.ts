import { Injectable } from '@angular/core';
import { Journal } from '../models/Journal';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  journals: object;
  private entrySource = new BehaviorSubject<number>(null);
  selectedEntry = this.entrySource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(false);
  source = this.stateSource.asObservable();

  constructor() {
    if (localStorage.getItem('journals') === null) {
      this.journals = {};
    } else {
      this.journals = JSON.parse(localStorage.getItem('journals'));
    }
  }

  getJournals(): object {
    return this.journals;
  }

  getJournalbyId(id: number): Journal {
    return this.journals[id];
  }

  addJournal(journal: Journal) {
    this.journals[journal.id] = journal;
    localStorage.setItem('journals', JSON.stringify(this.journals));
  }

  deleteJournal(id: number) {
    delete this.journals[id];
    localStorage.setItem('journals', JSON.stringify(this.journals));
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

  setEnrty(id: number) {
    this.entrySource.next(id);
  }

  clearState() {
    this.stateSource.next(true);
  }
}
