import { ElementRef, HostListener, Directive } from '@angular/core';

@Directive({
  selector: 'input[autosize]'
})

export class AutosizeDirective {
  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLInputElement): void {
    this.adjust();
  }
  base: number;
  constructor(public element: ElementRef) {

  }
  ngAfterContentChecked(): void {
    this.adjust();
  }

  //Funcion que autoajusta los input text agregando pixeles acorde con su max-width
  //@return: void
  adjust(): void {
      if (!this.base) {
        this.base = parseInt(this.element.nativeElement.offsetWidth); 
      }
      this.element.nativeElement.style.overflow = 'hidden';
      if (this.element.nativeElement.scrollWidth > this.base) {
        this.element.nativeElement.style.width = this.element.nativeElement.scrollWidth + "px";
      } else {
        this.element.nativeElement.style.width = this.base + 'px';
      }
  }
}