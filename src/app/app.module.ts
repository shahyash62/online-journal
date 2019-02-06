import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JournalListComponent } from './components/journal-list/journal-list.component';

import { JournalService } from './services/journal.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NavBarComponent,
    JournalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
