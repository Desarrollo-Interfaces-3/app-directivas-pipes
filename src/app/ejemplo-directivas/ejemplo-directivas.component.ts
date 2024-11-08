import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css'
})
export class EjemploDirectivasComponent {

  mostrarAlumnos = false
  mostrarCursos = false

  alumnosLista: Alumno = []
  cursosLista: Curso = []

  verAlumnos():void {
    this.mostrarAlumnos = true
    this.alumnosLista.push({id: 1, nombre: "Luis Angel", apellido: "Salvat"})
    this.alumnosLista.push({id: 2, nombre: "Harold Angel", apellido: "Salvat"})
    this.alumnosLista.push({id: 3, nombre: "María Angel", apellido: "Salvat"})
    this.alumnosLista.push({id: 4, nombre: "Julio", apellido: "Salvat"})

  }

  verCursos():void {
    this.mostrarCursos = true
  }

}

type Alumno = Array<{id: number; nombre: string; apellido: string}>
type Curso = Array<{id: number; nombre: string; precio: number}>

