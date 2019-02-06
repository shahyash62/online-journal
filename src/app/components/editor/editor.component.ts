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

  constructor(private journalService: JournalService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.journalService.addJournal({
      id: 5,
      title: this.title,
      content: this.content,
      date: new Date()
    });
  }
}
