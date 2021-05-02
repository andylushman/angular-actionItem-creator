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
  showDeleteButton: boolean = true;

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
    this.showDeleteButton = true;
  }

  deleteActionItem(id: string): void {
    this.actionItems.deleteActionItem(id);
  }

  cancelUpdate(): void {
    this.titleValue = this.item.title;
    this.detailsValue = this.item.details;
    this.showDeleteButton = true;
  }

  onKeyupTitle(event, actionItem: ActionItem): void {
    this.showDeleteButton = actionItem.title === event.target.innerText;
  }

  onKeyupDetails(event, actionItem: ActionItem): void {
    this.showDeleteButton = actionItem.details === event.target.innerText;
  }
}
