import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';


const cliente1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada'
}

const cliente2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada'
}


@Component({
  selector: 'app-custom',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {

  invitationMap = {
    male: 'conocerlo',
    female: 'conocerla'
  }

  client = signal(cliente1)

  changeClient(){
    if(this.client() === cliente1){
      this.client.set(cliente2)
      return
    }

    this.client.set(cliente1)
  }
}
