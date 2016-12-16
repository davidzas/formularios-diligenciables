import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;
declare let kendo: any;
  
kendo.pdf.defineFont({
  "helveticasp": "assets/fonts/helveticasp.ttf"
});


@Component({
  selector: 'app-modificacion-servicios',
  templateUrl: './modificacion-servicios.component.html',
  styleUrls: ['./modificacion-servicios.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModificacionServiciosComponent implements OnInit {

  enlistpdf: any;
  puedeDescargar: any;
  constructor() {
    this.enlistpdf = false;
    this.puedeDescargar = true;
  }

  ngOnInit() {  }

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
      kendo.drawing.drawDOM(jQuery(".formulario-diligenciable.modificacion-servicios"), {
        forcePageBreak: ".page-break", paperSize: "Legal", scale: 0.48
      }).then((group) => {
        kendo.drawing.pdf.saveAs(group, "formato_modificacion_servicios.pdf");

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
    //*********************************************************//
    /*this.puedeDescargar = false;
    this.enlistpdf = true;
    console.log(this.enlistpdf);

    kendo.drawing.drawDOM(jQuery(".formularioms"), {
      paperSize: "Legal",
      //margin: "0cm",
      scale: 0.48
    }).then(function(group){
      kendo.drawing.pdf.saveAs(group, "formulario_modificacion_servicios.pdf");
      this.enlistpdf = false;
      console.log(this.enlistpdf);
      this.puedeDescargar = true;
    });*/

  }

}
