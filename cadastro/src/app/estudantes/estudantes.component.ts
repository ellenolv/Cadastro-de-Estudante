import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudantesService } from '../estudantes.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ɵafterNextNavigation } from '@angular/router';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit{

  estudantes : Estudante[] = [];
  formGroupEstudante: FormGroup;
  constructor(private estudantesService: EstudantesService, private formBuilder: FormBuilder) { 
    this.formGroupEstudante = this.formBuilder.group({
      id: [],
      nome: [],
      email: [],
      curso: [],
      periodo: []
      
    });
  }

  ngOnInit(): void {
    this.loadEstudantes();
  }

  loadEstudantes(){
    this.estudantesService.getEstudantes().subscribe(
      {
        next: data => this.estudantes = data,
        error: () => console.log('Erro ao carregar lista de estudantes')
      }
      );
  }

}
