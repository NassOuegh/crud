import { Component, OnInit } from '@angular/core';
import { Equipe } from '../entities/models';
import { EquipeService } from '../service-equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.page.html',
  styleUrls: ['./ajout-equipe.page.scss'],
})
export class AjoutEquipePage implements OnInit {
  equipe: Equipe;

  constructor(private service: EquipeService, private router: Router) {}

  ngOnInit() {}
  public addEquipe(equipe) {
    this.service.postEquipe(equipe);
  }
  public submit(addform) {
    //alert(addform.value.num + " " + addform.value.name + " " + addform.value.country);
    this.equipe = {
      id: addform.value.num,
      name: addform.value.name,
      country: addform.value.country,
    };
    this.service.postEquipe(this.equipe).subscribe((response) => {
      alert("Ajout avec succès de l'équipe!");
      this.router.navigate(['/list-equipe']);
    });
  }
}
