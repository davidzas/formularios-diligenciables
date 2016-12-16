import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;
declare let kendo: any;
  
kendo.pdf.defineFont({
  "helveticasp": "assets/fonts/helveticasp.ttf"
});

@Component({
  selector: 'app-pqr-queja',
  templateUrl: './pqr-queja.component.html',
  styleUrls: ['./pqr-queja.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PqrQuejaComponent implements OnInit {

  enlistpdf: any;
  puedeDescargar: any;
  constructor() {
    this.enlistpdf = false;
    this.puedeDescargar = true;
  }

  ngOnInit() {
      //Limitando Text Area
      jQuery('textarea').keydown(function(e){
          console.log(jQuery(this).val().length);
          if((e.keyCode == 13 && jQuery(this).val().split("\n").length >= jQuery(this).attr('rows'))||
            (jQuery(this).val().length > (jQuery(this).attr('rows') * 197) )) { 
              return false;
          }e lse if(parseInt(jQuery(this).val().length)>jQuery(this).attr('maxlength')){
              jQuery(this).val(jQuery(this).val().substring(0,jQuery(this).attr('maxlength')-1));
          }
      });
  }

  descargarPdf() {
    this.enlistpdf = true;
    this.puedeDescargar = false;
    let cajitas = [];
    let radios = [];
    jQuery('input[type=checkbox]').each(function () {
      if (jQuery(this).prop("checked")) {
        let id = jQuery(this).prop('id');
        jQuery(this).replaceWith('<span id="' + id + '" class="cajita-print">X</span>');
      } else {
        jQuery(this).hide();
      }
      cajitas.push(this);
    });
    jQuery('input[type=radio]').each(function () {
      if (jQuery(this).prop("checked")) {
        let id = jQuery(this).prop('id');
        jQuery(this).replaceWith('<span id="' + id + '" class="cajita-print">X</span>');
      } else {
        jQuery(this).hide();
      }
      radios.push(this);
    });
    setTimeout(_ => {
      kendo.drawing.drawDOM(jQuery(".formulariopq"), {
        forcePageBreak: ".page-break", paperSize: "Legal", scale: 0.48
      }).then((group) => {
        kendo.drawing.pdf.saveAs(group, "formato_queja.pdf");

        this.puedeDescargar = true;
        this.enlistpdf = false;
        cajitas.forEach(el => {
          let id = jQuery(el).prop('id');
          jQuery('#' + id).replaceWith(el);
        });
        radios.forEach(el => {
          let id = jQuery(el).prop('id');
          jQuery('#' + id).replaceWith(el);
        });
        jQuery('input[type=radio],input[type=checkbox]').each(function () {
            jQuery(this).show();
        });
      });
    }, 1000);
  }

}
