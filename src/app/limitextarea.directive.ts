import { ElementRef, HostListener, Directive } from '@angular/core';
declare let jQuery: any;


@Directive({
  selector: 'textarea[limit]',
  host: {
    '(document:keydown)': 'onDocumentKeyDown($event)'
  }

})
export class LimitextareaDirective {

  constructor(public element:ElementRef) { }

  // Funcion para limitar el text area por los atributos rows y maxlength
  // @return: bool(false)
  onDocumentKeyDown(ev: KeyboardEvent) {

  	let el:any = document.activeElement;
  	if(el && el.tagName.toLowerCase() =='textarea'){
  		if(ev.key=='Enter'){
		    let value = el.value;
		  	let rows = el.getAttribute("rows");
		  	let maxlength = el.getAttribute("maxlength");
		  	if(value.split("\n").length >= rows) { 
			    return false;
			}else if(parseInt(value.length)>maxlength){
				return false;			    
			}
	  	}
  	}

  	if(el && el.tagName.toLowerCase() =='input' && el.type == 'number'){
  		let maxnumlength = el.getAttribute("maxlength");
  		if (el.value.length > maxnumlength) {
	        el.value = el.value.slice(0,maxnumlength); 
	    }
  	}
  }

}
