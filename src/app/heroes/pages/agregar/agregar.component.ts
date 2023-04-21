import { Component, OnInit, Pipe } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: "DC Comics",
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  title: string = '';

  heroe: Heroe = {
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute,
    private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroesPorId(id))
      )
      .subscribe(heroe => this.heroe = heroe)

      this.title = (this.heroe.id != undefined) ? 'Nuevo Heroe' : 'Editar Heroe';
  }

  guardar(){
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnakbar("Registro Actualizado"))
    }
    else{
      this.heroesService.agregarHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnakbar("Registro Creado");
      });
    }



  }

  borrarHeroe(){
    const dialog = this.dialog.open(ConfirmarComponent, {
      width:'250px',
      data:this.heroe
    });

    dialog.afterClosed().subscribe((result) => {
      if(result){
        this.heroesService.borrarHeroe(this.heroe.id!)
        .subscribe(resp => {
        this.router.navigate(['/heroes'])
      });
      }
    })


  }

  mostrarSnakbar(mensaje: string){
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2000
    });
  }

}
function subscribe(arg0: ({ id }: { id: any; }) => void) {
  throw new Error('Function not implemented.');
}

