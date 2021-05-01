import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.scss'],
})
export class ToggleElementComponent implements OnInit {
  @Input() toggledElement: string;
  showText: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
