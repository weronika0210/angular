import { Komunikat } from './komunikat';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Slowo';

  komunikaty:string[];
  pokazKomunikaty = true;
  // nowyKomunikat: Komunikat;

  ngOnInit() {
this.komunikaty = [
  // 'Ala ma kota',
  // 'Kot ma dosc Ali',
  // 'Kot i Ala drą ze sobą koty',
  new Komunikat('Treść pierwszego komunikatu', new Date(), true),
  new Komunikat('Treść drugiego komunikatu', new Date(), true),
  new Komunikat('Treść trzeciego komunikatu', new Date(), false),
];
// this.nowyKomunikat = new Komunikat('Treść pierwszego komunikatu', new Date(), false);
// this.nowyKomunikat = new Komunikat('Treść drugiego komunikatu', new Date(), true);
// this.nowyKomunikat = new Komunikat('Treść trzeciego komunikatu', new Date(), false);
  }
}