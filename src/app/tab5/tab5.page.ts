// Importa la clase 'Component' y 'OnInit' de Angular
import { Component, OnInit } from '@angular/core';

// Decorador del componente
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})

// Clase del componente
export class Tab5Page implements OnInit {
  // Definición de la propiedad userProfile
  userProfile: any = {
    name: 'Miguel Angel Millan',
    favoriteSongs: ['Canción Favorita 1', 'Canción Favorita 2'],
    mySongs: ['Mi Canción 1', 'Mi Canción 2'],
  };

  // Método ngOnInit para la inicialización
  ngOnInit() {
    
  }
}
