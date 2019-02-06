import { Injectable } from '@angular/core';
import { Journal } from '../models/Journal';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  journals: Journal[];

  constructor() {
    this.journals = [
      {
        id: 0,
        title: 'Test',
        content: 'testcontent',
        date: new Date()
      },
      {
        id: 1,
        title: 'JournalTest',
        content: 'testcontentagain',
        date: new Date()
      },
      {
        id: 2,
        title: 'OHOHTest',
        content: 'fuktestcontent random words I am gonna write to test out the overflow thing. I am hanging off the edge.' +
        'Storm cloud gathered beneath me.',
        date: new Date()
      }
    ];
  }

  getJournals(): Journal[] {
    return this.journals;
  }

  addJournal(journal: Journal) {
    this.journals.unshift(journal);
  }
}
