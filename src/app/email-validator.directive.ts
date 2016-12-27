import { ElementRef, Renderer, Directive, Output, HostBinding } from '@angular/core';

@Directive({
  selector: 'input[validateEmail]',
  host: { '(blur)': 'onBlur($event)' },

})
export class EmailValidatorDirective {
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostBinding('class.invalido') correcto: boolean = false;

  //Funcion que evalua el patron de email ingresado y retorna el foco si hay errores	
  //@return: void
  onBlur($event) {

    let value = this.el.nativeElement.value;
    let pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if ((pattern.test(value)) || (value == "")) {
     
      this.correcto = false;
    } else {
     
      //this.el.nativeElement.focus();
      this.correcto = true;
    }


  }

}