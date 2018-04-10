import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = "Oscar";
  nombre2 = "oscar edUardO alvaRAdo quiRoga"

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primerra",
      casa: "19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout(()=> resolve('Llego la data'), 3500);
  });

  fecha = new Date();

  video = "3F0XDQy9wE8";

  activar:boolean = true;
}
