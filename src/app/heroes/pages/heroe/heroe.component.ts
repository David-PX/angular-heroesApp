import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `img{
      width:100%;
      border-radius:10px;
    }`
  ]
})
export class HeroeComponent implements OnInit {

  heroeID : string = '';

  heroe!: Heroe;

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router ) { }

  ngOnInit(): void {
    this.heroeID = this.activateRoute.snapshot.params['id'];
    this.heroesService.getHeroesPorId(this.heroeID)
    .subscribe(heroe => {
      this.heroe = heroe
    });

  }

  regresar(){
    this.router.navigate(['/heroes/listado']);

  }

}
