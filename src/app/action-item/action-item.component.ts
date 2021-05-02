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

  ngOnChanges(): void {
    this.titleValue = this.item.title;
    this.detailsValue = this.item.details;
    this.showDeleteButton = true;
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

  onKeyupTitle(event: { target: { value: string; innerText: string } }): void {
    this.titleValue = event.target.innerText;
    this.showDeleteButton = this.titleValue === this.item.title;
  }

  onKeyupDetails(event: { target: { innerText: string } }): void {
    this.detailsValue = event.target.innerText;
    this.showDeleteButton = this.detailsValue === this.item.details;
  }
}
