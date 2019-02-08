import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';

import { Journal } from 'src/app/models/Journal';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {

  journalSelected = false;
  selectedId: number;
  selectedJournal: Journal;

  title = '';
  content = '';
  counter: number;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.counter = this.journalService.getCounter();
    this.journalService.selectedEntry.subscribe(id => {
      if (id !== null) {
        this.journalSelected = true;
        this.selectedId = id;
        this.selectedJournal = this.journalService.getJournalbyId(this.selectedId);
        this.title = this.selectedJournal.title;
        this.content = this.selectedJournal.content;
      }
    });
  }

  onSubmit(isUpdate: boolean) {
    this.journalService.addJournal({
      id: this.counter,
      title: this.title,
      content: this.content,
      date: new Date()
    });
    this.counter -= 1;
    this.journalService.updateCounter(this.counter);
    if (isUpdate) {
      this.journalService.deleteJournal(this.selectedId);
    }
    this.clearState();
  }

  onDelete() {
    this.journalService.deleteJournal(this.selectedId);
    this.clearState();
  }

  clearState() {
    this.title = '';
    this.content = '';
    this.selectedId = null;
    this.selectedJournal = null;
    this.journalSelected = false;
    this.journalService.clearState();
  }
}
