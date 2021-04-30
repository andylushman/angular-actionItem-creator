import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit, OnChanges {

  @Input()
  size: SpinnerSize = 'medium'

  constructor(
    private element: ElementRef<HTMLElement>,
  ) { }

  ngOnInit() {
  }

  get rainbow(): boolean {
    return new Date().getMonth() === 5 // Only shown in June
  }

  get dim(): Dimensions {
    switch (this.size) {
      case 'icon-button':
        return {
          diameter: 20,
          strokeWidth: 3
        }
      case 'small':
        return {
          diameter: 24,
          strokeWidth: 3
        }
      case 'medium':
        return {
          diameter: 38,
          strokeWidth: 5
        }
      default:
        return this.size
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.element.nativeElement.style.height = this.dim.diameter.toString() + 'px'
    this.element.nativeElement.style.width = this.dim.diameter.toString() + 'px'
  }
}

export type SpinnerSize = 'icon-button' | 'small' | 'medium' | Dimensions

interface Dimensions {
  diameter: number,
  strokeWidth: number
}
