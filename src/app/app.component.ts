import { Component, OnInit } from '@angular/core';
import { ActionItem, ActionItemsService } from './action-items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  actionItems$: Observable<ActionItem[]>;
  shownAiIndex = 0;

  constructor(public actionItems: ActionItemsService) {}

  ngOnInit() {
    this.actionItems$ = this.actionItems.getActionItems();
  }
}
