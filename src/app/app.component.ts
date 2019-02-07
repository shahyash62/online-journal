import { Component, OnInit } from '@angular/core';
import { JournalService } from './services/journal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'online-journal';

  constructor(private journalService: JournalService) {}

  ngOnInit() {
    this.journalService.setCounter();
  }
}
