import { Component, Input, OnInit } from '@angular/core';
import { ActionItem, ActionItemsService } from '../action-items.service';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss'],
})
export class ActionItemComponent implements OnInit {
  @Input() item: ActionItem;
  titleValue: string;
  detailsValue: string;

  constructor(public actionItems: ActionItemsService) {}

  ngOnInit(): void {
    this.titleValue = this.item.title;
    this.detailsValue = this.item.details;
  }

  updateActionItem(id: string, actionItem: ActionItem): void {
    const updatedActionItem = { ...actionItem };
    updatedActionItem.title = this.titleValue;
    updatedActionItem.details = this.detailsValue;

    this.actionItems.updateActionItem(id, updatedActionItem);
  }
}
