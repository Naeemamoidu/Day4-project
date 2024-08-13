import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CyberComponent } from '../../cyber/cyber.component';
import { MobComponent } from '../../mob/mob.component';
import { BANKComponent } from '../../bank/bank.component';
import { HealthComponent } from '../../health/health.component';
import { InduComponent } from '../../indu/indu.component';
import { AeroComponent } from '../../aero/aero.component';
import { LocoComponent } from '../../loco/loco.component';
import { InsuComponent } from '../../insu/insu.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
department=[
  {
  id:1,
  Title:"INSURANCE",
  image:"../../../assets/ins.avif",
  description:"Unlocking the potential of insurance through technology",
  link:'insu'
},
{
  id:2,
  Title:"LOCOMOTIVE",
  image:"../../../assets/LOC.jpg",
  description:"Elevating Locomotive Experiences through Innovative Technologies",
  link:'loco'
},
{
id:3,
  Title:"AERO SPACE AND DEFENCE",
  image:"../../../assets/AERO.jpg",
  description:"Pushing boundaries & defending horizons with cutting-edge technologies",
  link:'aero'
},
{
  id:4,
  Title:"CYBER SECURITY",
  image:"../../../assets/SEC.jpg",
  description:"Secure your digital frontiers with cutting-edge Cyber Security",
  link:'cyber'
},
{
  id:5,
  Title:"HEALTH CARE",
  image:"../../../assets/HEALTH.jpg",
  description:"Where Power Meets Production: Redefining Manufacturing & Energy levels",
  link:'health'
},
{
  id:6,
  Title:"BANKING",
  image:"../../../assets/BANK.jpg",
  description:"Accelerating the cashless economy efficiently by adopting global standards ",
  link:'bank'
},
{
  id:7,
  Title:"MOBILITY",
  image:"../../../assets/car.jpg",
  description:"We are Revolutionizing the world of Mobility",
  link:'mob'
},
{
  id:8,
  Title:"INDUSTRIAL",
  image:"../../../assets/INDU.png",
  description:"Promoting digital innovation & excellence in the healthcare industry",
  link:'indu'
},  
]
}
