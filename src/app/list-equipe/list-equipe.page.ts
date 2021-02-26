import { Component, OnInit } from '@angular/core';
import { Equipe } from '../entities/models';
import { EquipeService } from '../service-equipe.service';


@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.page.html',
  styleUrls: ['./list-equipe.page.scss'],
})
export class ListEquipePage implements OnInit {
  equipes : Equipe[];

  constructor(private service: EquipeService) { }

  ngOnInit(): void {
    this.refresh();
  }

  public delete(equipe) {
    alert("Voulez vous vraiment supprimer : "+ equipe.name);

    this.service.deleteEquipe(equipe).subscribe(
      response => {
        this.refresh();
      }
    );
  }

  public refresh() { 
    this.service.getEquipe().subscribe(
      response => {
        console.log(response);
        this.equipes = (<Equipe[]>response);
       }
      );
    }
  
}