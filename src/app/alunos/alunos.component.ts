
import {Component} from '@angular/core';
/* <!--
- criar novo componente (Aluno)
- criar objeto Aluno(id, nome, end, idade, nota1, nota2, media, status)
- criar novo componente (Aluno) uma lista de 10 alunos
- ir no angular materias component table
- se aluno esta aprovado ou reprovado
- mostrar em um dialog
- 'position', 'name', 'end', 'idade', 'nota1', 'nota2', 'nota3', 'media', 'status'
--> */
export interface PeriodicElement {
  name: string;
  position: number;
  end: string;
  idade: number;
  nota1: number;
  nota2: number;
  nota3: number;
  media: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Antonia Fernandes', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 2, name: 'Bruno Oliveira', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 3, name: 'Caroline Gomes', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 4, name: 'Daniela Rodrigues', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 5, name: 'Felipe Britto', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 6, name: 'Joao Junior', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 7, name: 'Karla Souza', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 8, name: 'Mateus Silva', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 9, name: 'Paulo Hernandes', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
  {position: 10, name: 'Rangel Gomes', end: "Três Lagoas - MS", idade: 18, nota1: 10, nota2: 9, nota3: 10, media: 9.5, status: 'cursando'},
];

/**
 * @title ALUNOS.
 */
@Component({
  selector: 'app-alunos',
  styleUrls: ['alunos.component.css'],
  templateUrl: 'alunos.component.html',
})
export class AlunosComponent {
  displayedColumns: string[] = ['position', 'name', 'end', 'idade', 'nota1', 'nota2', 'nota3', 'media', 'status'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  alunosService: any;
  alunos: any;
  static id: any;

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.alunosService.addAluno({ name } as unknown as AlunosComponent)
  .subscribe((aluno: any) => {
  this.alunos.push(aluno);
  });
  }

delete(aluno: AlunosComponent): void {
this.alunos = this.alunos.filter((h: AlunosComponent) => h !== aluno);
this.alunosService.deleteHero(this.alunos.id).subscribe();
  }
}
