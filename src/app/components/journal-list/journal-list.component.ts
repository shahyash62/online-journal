import { Component, OnInit } from '@angular/core';
import { Journal } from 'src/app/models/Journal';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.sass']
})
export class JournalListComponent implements OnInit {

  journals: object;
  journalKeys = Object.keys;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journals = this.journalService.getJournals();
  }
}
