import { SHeroeComponent } from './pages/s-heroe/s-heroe.component';
import { SHeroesComponent } from './pages/s-heroes/s-heroes.component';


// Librerias Angular
import {​​​​​ RouterModule, Routes }​​​​​ from'@angular/router';



const APP_ROUTES:Routes=
 [
    {​​​​​ path:'heroes', component: SHeroesComponent }​​​​​,
    {​​​​​ path:'heroe/:id', component: SHeroeComponent }​​​​​,
// ruta con parametro
    {​​​​​ path:'**', pathMatch:'full', redirectTo:'heroes' }​​​​​,
];
export const ROUTES= RouterModule.forRoot(APP_ROUTES);
