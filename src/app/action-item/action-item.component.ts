import { Component, Input, OnInit } from '@angular/core';
import { ActionItem, ActionItemsService } from '../action-items.service';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss'],
})
export class ActionItemComponent implements OnInit {
  @Input() item: ActionItem;
  titleValue = '';
  detailsValue = '';

  constructor(public actionItems: ActionItemsService) {}

  ngOnInit(): void {
    this.titleValue = this.item.title;
    this.detailsValue = this.item.details;
  }
}
