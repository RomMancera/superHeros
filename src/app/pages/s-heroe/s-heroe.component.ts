import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/Models/heroe.model';
import { HeroesService } from 'src/app/servicio/heroes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

//ALERTAS
import Swal from "sweetalert2";


@Component({
  selector: 'app-s-heroe',
  templateUrl: './s-heroe.component.html',
  styleUrls: ['./s-heroe.component.css']
})
export class SHeroeComponent implements OnInit {
   heroe : HeroeModel = new HeroeModel ();
  constructor( private heroeService: HeroesService, private route : ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    if(id !== 'nuevo'){
      this.heroeService.obtenerHero(id)
      .subscribe(
        ( hero : HeroeModel) =>{
        this.heroe = hero;
        this.heroe.id= id;
      })   
     }

  }

  guardar(form : NgForm){
    if(form.invalid){
      console.log("formulario invalido");
      return;
    }

    Swal.fire({​​​​

      title: 'Espere!',

      text: 'Guardando',

      icon: 'info',

      allowOutsideClick: false

    }​​​​)
    Swal.showLoading();
    
let peticion : Observable<any>;

    if(this.heroe.id){
      peticion = this.heroeService.editarHero(this.heroe);
    }else{
     peticion = this.heroeService.crearHeroe(this.heroe);
    }

    peticion.subscribe(resp =>{
      Swal.fire 
      ({
       title: this.heroe.nombre,
       text:  'Se guardo correctamente',
       icon:  'success'
      })
    })

  }

}
