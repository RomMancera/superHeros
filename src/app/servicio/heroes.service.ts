import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../Models/heroe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
    private url = 'https://crudheroes-a793e.firebaseio.com';
    hay: boolean;
  constructor(private http: HttpClient) { }

  crearHeroe(heroe : HeroeModel){
   return this.http.post(`${this.url}/heroes.json`, heroe)
   .pipe(
     map(
       (respuesta : any) =>{
         heroe.id = respuesta.name;
         return heroe;
       }
     )
   );
  }
 
   editarHero(heroe :HeroeModel){
     const heroeTemporal ={
      ...heroe
     };
    delete heroeTemporal.id;

     return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemporal);
   }

  borrarHero(id : string){
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  obtenerHero(id:string){
   return this.http.get(`${this.url}/heroes/${id}.json`);
    }

  getHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
    .pipe(
      map(this.createArreglo)
      
    );
  
  }

  private createArreglo(hero : object){
   const heroes :HeroeModel[] = [];
   console.log(hero);
   if (hero === null){
     return [];
   } 

  Object.keys( hero ).forEach(
    key => {
      const heroe :HeroeModel = hero[key];
      heroe.id = key;
      heroes.push(heroe);
    }
  );
 
console.log(heroes);
return heroes;
  }

}
