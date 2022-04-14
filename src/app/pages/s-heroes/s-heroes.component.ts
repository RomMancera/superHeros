import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/Models/heroe.model';
import { HeroesService } from 'src/app/servicio/heroes.service';

//ALERTAS
import Swal from "sweetalert2";

@Component({
  selector: 'app-s-heroes',
  templateUrl: './s-heroes.component.html',
  styleUrls: ['./s-heroes.component.css']
})
export class SHeroesComponent implements OnInit {
  heroes : HeroeModel[]=[];
  hay :boolean= false;
  verheros = false;
  constructor(private heroeS: HeroesService) { 
    
  }

  ngOnInit(): void {
    this.heroeS.getHeroes().subscribe
    (heros=> {
      
      this.heroes = heros
      console.log(this.heroes);
      if(this.heroes.length === 0){
        this.hay= true;
        this.verheros= true;
      }
    })
   
  }
     
 

  borrarHeroe(heroe : HeroeModel, i : number){
    Swal.fire({
      title: `¿Seguro que quiere borrar a ${heroe.nombre}?`,
      text: "No podras recuperarlo despues!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.heroes.splice(i, 1);
        this.heroeS.borrarHero(heroe.id)
        .subscribe();
        Swal.fire(
          'Borrado!',
          'Su heroe se ha borrado.',
          'success'
        )
      }
    })
  }

   
}
