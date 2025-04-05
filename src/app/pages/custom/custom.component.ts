import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const cliente1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada',
};

const cliente2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-custom',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css',
})
export class CustomComponent {
  invitationMap = {
    male: 'conocerlo',
    female: 'conocerla',
  };

  client = signal(cliente1);

  changeClient() {
    if (this.client() === cliente1) {
      this.client.set(cliente2);
      return;
    }

    this.client.set(cliente1);
  }

  // i18n Plural
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  clients = signal([
    'Maria',
    'Jose',
    'Jesus',
    'Pedro',
    'Yaiza',
    'Josselyn',
    'Antonio',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // Key Value Pipe
  profile = {
    name: 'Maria Clara',
    age: 29,
    address: 'Medellin, Colombia'
  }


  // Async Pipe
  promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('Information is comming from promise')
      console.log("Promise completed");
    }, 2500)
  })

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value) )
  )
}
