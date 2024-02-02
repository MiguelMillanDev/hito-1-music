import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4-tab',
  templateUrl: './tab4-tab.page.html',
  styleUrls: ['./tab4-tab.page.scss'],
})
export class Tab4TabPage implements OnInit {
  songName: string = '';
  artist: string = '';
  album: string = '';
  releaseYear: number | null = null;
  coverImage: File | null = null;
  songFile: File | null = null;

  ngOnInit() {
   //iniciamos valores si es necesario 
  }

  onSubmit() {
    // Agrega lógica de validación si es necesario antes de la subida
    if (!this.songName || !this.artist || !this.songFile) {
      console.error('Por favor, complete los campos obligatorios');
      return;
    }

    // Implementa la lógica de subida de canción aquí
    console.log('Formulario enviado');
    console.log('Nombre de la canción:', this.songName);
    console.log('Artista:', this.artist);
    console.log('Álbum:', this.album);
    console.log('Año de lanzamiento:', this.releaseYear);
    console.log('Imagen de portada:', this.coverImage);
    console.log('Archivo de canción:', this.songFile);

    // Limpia los campos después de la subida si es necesario
    this.songName = '';
    this.artist = '';
    this.album = '';
    this.releaseYear = null;
    this.coverImage = null;
    this.songFile = null;
  }

  onImageSelected(event: any) {
    this.coverImage = event.target.files[0];
  }

  onSongSelected(event: any) {
    this.songFile = event.target.files[0];
  }
}
