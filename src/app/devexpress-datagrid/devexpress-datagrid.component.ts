import { Component, OnInit } from '@angular/core';
import { DepremService } from '../services/deprem.service';
import { Earthquakes } from '../models/earthquakes';

@Component({
  selector: 'app-devexpress-datagrid',
  templateUrl: './devexpress-datagrid.component.html',
  styleUrls: ['./devexpress-datagrid.component.css'],
  providers: [DepremService]
})
export class DevexpressDatagridComponent implements OnInit {

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
