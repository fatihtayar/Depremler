import { Component, OnInit } from '@angular/core';
import { DepremService } from '../services/deprem.service';
import { Earthquakes } from '../models/earthquakes';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css'],
  providers: [DepremService]
})
export class BootstrapTableComponent implements OnInit {

  constructor(private depremService:DepremService) { }

  earthquakes : Earthquakes[];

  getEarthQuakes () {
    this.depremService.getEarthQuakes().subscribe(result=>{
      this.earthquakes=result
      console.log(this.earthquakes)
    })
  }

  ngOnInit() {
    this.getEarthQuakes ();
  }

}
