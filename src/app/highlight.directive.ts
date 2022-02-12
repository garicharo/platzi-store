import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef, private render: Renderer2) { 

    this.render.setStyle( element.nativeElement, 'backgroundColor', 'Grey' );

  }

}
