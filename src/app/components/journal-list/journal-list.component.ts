import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.sass']
})
export class JournalListComponent implements OnInit {

  journals: object;
  journalKeys = Object.keys;
  selectedId = -1;

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journals = this.journalService.getJournals();
    this.journalService.source.subscribe(state => {
      if (state) {
        this.clearState();
      }
    });
  }

  onSelect(id: number) {
    this.journalService.setEnrty(id);
    this.selectedId = id;
  }

  clearState() {
    this.selectedId = -1;
  }
}
