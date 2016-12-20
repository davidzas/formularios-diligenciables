import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;
declare let kendo: any;
  
kendo.pdf.defineFont({
  "helveticasp": "assets/fonts/helveticasp.ttf"
});

@Component({
  selector: 'app-pqr-recurso',
  templateUrl: './pqr-recurso.component.html',
  styleUrls: ['./pqr-recurso.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PqrRecursoComponent implements OnInit {

  enlistpdf: any;
  puedeDescargar: any;
  constructor() {
    this.enlistpdf = false;
    this.puedeDescargar = true;
  }

  ngOnInit() {  }

  //Funcion que permite descargar el formulario en formato PDF, utilizando la libreria kendo
  //@return: formato.pdf
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
      kendo.drawing.drawDOM(jQuery(".formulariopr"), {
        forcePageBreak: ".page-break", paperSize: "Legal", scale: { x: 0.47, y: 0.46 }
      }).then((group) => {
        kendo.drawing.pdf.saveAs(group, "formato_recurso.pdf");

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
