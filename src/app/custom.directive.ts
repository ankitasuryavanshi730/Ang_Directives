import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = "red";
    el.nativeElement.style.backgroundColor = "yellow";
   }

}
