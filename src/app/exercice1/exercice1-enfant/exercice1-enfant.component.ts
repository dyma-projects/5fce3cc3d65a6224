import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;

  @Output() changeCompteur: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  increment() {
    this.compteur++;
    this.changeCompteur.emit(this.compteur);
  }
  decrement() {
    this.compteur--;
    this.changeCompteur.emit(this.compteur);
  }
}
