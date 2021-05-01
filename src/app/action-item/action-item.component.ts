import { Component, Input, OnInit } from '@angular/core';
import { ActionItem } from '../action-items.service';

@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss'],
})
export class ActionItemComponent implements OnInit {
  @Input() item: ActionItem;

  constructor() {}

  ngOnInit(): void {}
}
