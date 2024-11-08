import { Routes } from '@angular/router';
import { EjemploDirectivasComponent } from './ejemplo-directivas/ejemplo-directivas.component';
import { EjemploPipesComponent } from './ejemplo-pipes/ejemplo-pipes.component';

export const routes: Routes = [
    {path: "directivas", component: EjemploDirectivasComponent},
    {path: "pipes", component: EjemploPipesComponent}
];
