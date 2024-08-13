import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutComponent } from './pages/about/about.component';
import { AeroComponent } from './aero/aero.component';
import { BANKComponent } from './bank/bank.component';
import { HealthComponent } from './health/health.component';
import { InduComponent } from './indu/indu.component';
import { InsuComponent } from './insu/insu.component';
import { LocoComponent } from './loco/loco.component';
import { MobComponent } from './mob/mob.component';
import { CyberComponent } from './cyber/cyber.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"department",component:DepartmentComponent},
    {path:"aero",component:AeroComponent},
    {path:"about",component:AboutComponent},
    {path:"bank",component:BANKComponent},
    {path:"health",component:HealthComponent},
    {path:"indu",component:InduComponent},
    {path:"insu",component:InsuComponent},
    {path:"loco",component:LocoComponent},
    {path:"mob",component:MobComponent},
    {path:"cyber",component:CyberComponent}
];
