import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipe } from '../entities/models';
import { EquipeService } from '../service-equipe.service';

@Component({
  selector: 'app-modif-equipe',
  templateUrl: './modif-equipe.page.html',
  styleUrls: ['./modif-equipe.page.scss'],
})
export class ModifEquipePage implements OnInit {
  id: string;
  equipe: Equipe={"id":0,"name":"","country":""};

  constructor(
    private service: EquipeService,
    private routeActive: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeActive.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('id = ' + this.id);
      //alert(this.id)

      // récupération de l'équipe à modifier

      this.service.uneEquipe(Number(this.id)).subscribe((response) => {
        this.equipe = <Equipe>response;
        console.log('equipe :' + this.equipe);
        //console.log("equipe :"+this.equipe[1].name);
      });
    });
  }

  public submit(addform) {
    this.equipe = {
      id: addform.value.id,
      name: addform.value.name,
      country: addform.value.country,
    };
    this.service.updateEquipe(this.equipe).subscribe((response) => {
      console.log(this.equipe);
      //alert("Modification avec succès de l'équipe!");
      this.router.navigate(['/list-equipe']);
    });
  }
}
