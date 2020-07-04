import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-process',
  templateUrl: './inscription-process.component.html',
  styleUrls: ['./inscription-process.component.css']
})
export class InscriptionProcessComponent implements OnInit {
  items: any[] = [
    {hora: '7-8am', lunes: 'PNG-31', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '8-9am', lunes: 'PNG-31', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '9-10am', lunes: '', martes: '', miercoles: '', jueves: 'PNG-31', viernes: '', sabado: '', domingo: ''},
    {hora: '10-11am', lunes: '', martes: '', miercoles: '', jueves: 'PNG-31', viernes: '', sabado: '', domingo: ''},
    {hora: '11-12am', lunes: '', martes: '', miercoles: '', jueves: 'PNG-31', viernes: '', sabado: '', domingo: ''},
    {hora: '12-1pm', lunes: '', martes: '', miercoles: '', jueves: 'PNG-31', viernes: '', sabado: '', domingo: ''},
    {hora: '1-2pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '2-3pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '3-4pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '4-5pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '5-6pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '6-7pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '7-8pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '8-9pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '9-10pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''},
    {hora: '10-11pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
