import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  origen: number = 0;
  blend:  number = 0;
  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
    this.cafes = cafes;
    this.getOrigen(cafes);
    this.getBlend(cafes);
    });
  }

  getOrigen(cafes: Array<Cafe>): void{
    let cont: number = 0;

    for(let c of this.cafes){
      if(c.tipo.includes('Origen')){
        cont += 1;
      }

      this.origen = cont;
    }
  }

  getBlend(cafes: Array<Cafe>): void{
    let cont: number = 0;

    for(let c of this.cafes){
      if(c.tipo.includes('Blend')){
        cont += 1;
      }

      this.blend = cont;
    }
  }

  ngOnInit() {
    this.getCafes();
  }

}
