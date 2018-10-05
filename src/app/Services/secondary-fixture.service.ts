import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class SecondaryFixtureService extends DataService {
  constructor(http: Http) {
    super("./assets/secondary.json", http);
   }
}
