import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveDemo]',
})
export class CustomDirectiveDemoDirective {
  // ElementRef is a class name and ele is an object of a class.
  constructor(private ele: ElementRef) {}

  //event listners
  @HostListener('mouseenter') onmouseenter() {
    this.setColor('Blue');
    this.setFontSize('54px');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.setColor('Red');
    this.setFontSize('24px');
  }
  setColor(color: string) {
    this.ele.nativeElement.style.background = color;
  }
  setFontSize(size:string){
    this.ele.nativeElement.style.fontSize = size;

  }
}
