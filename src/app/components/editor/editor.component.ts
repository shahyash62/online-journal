import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {

  journalSelected = false;
  title: string;
  content: string;
  counter: number;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.counter = this.journalService.getCounter();
  }

  onSubmit() {
    this.journalService.addJournal({
      id: this.counter,
      title: this.title,
      content: this.content,
      date: new Date()
    });
    this.counter -= 1;
    this.journalService.updateCounter(this.counter);
  }
}
