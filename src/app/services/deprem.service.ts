import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Earthquakes } from '../models/earthquakes';
import { Observable } from 'rxjs';


@Injectable()
export class DepremService {

  constructor (private httpClient:HttpClient){}

  getEarthQuakes(): Observable<Earthquakes[]> {
    return this.httpClient.get<Earthquakes[]>("https://api.orhanaydogdu.com.tr/deprem/live.php");
  }


}
