import { ElementRef, Renderer, Directive } from '@angular/core';

@Directive({
  selector: 'input[validateEmail]',
  host: {'(blur)': 'onBlur($event)'}
})
export class EmailValidatorDirective {
  constructor(private el:ElementRef, private renderer:Renderer) {}

  //Funcion que evalua el patron de email ingresado y retorna el foco si hay errores	
  //@return: void
  onBlur($event) {

  	let value = this.el.nativeElement.value;
    let pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if((pattern.test(value))||(value == "")){
    	//this.el.nativeElement.style.border = '3px solid #3ad216'; //Valido(true)
    }else {
    	//this.el.nativeElement.style.border = '3px solid red'; //Invalido(false)
    	this.el.nativeElement.focus();
    }

  }
}