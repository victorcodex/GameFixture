import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';


@Injectable()
export class FixtureService extends DataService {
  constructor(http: Http) {
    super("./assets/primary.json", http);
   }
}
