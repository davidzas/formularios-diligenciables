import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare let jQuery: any;
declare let kendo: any;
kendo.pdf.defineFont({
  "newsghotic": "assets/fonts/fuente.ttf",
  "newsghotic|Bold": "assets/fonts/fuente_bold.ttf",
  "newsghotic_bold": "assets/fonts/fuente_bold.ttf"

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

  ngOnInit() {

    
  }

  descargarPdf() {
     this.puedeDescargar = false;
     kendo.drawing.drawDOM(jQuery(".formulario-diligenciable.modificacion-servicios"), { forcePageBreak: ".page-break" }).then((group) => {
       kendo.drawing.pdf.saveAs(group, "formato.pdf");
       this.puedeDescargar = true;
     });
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
