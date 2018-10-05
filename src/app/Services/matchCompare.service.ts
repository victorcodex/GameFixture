import { Injectable, Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class matchCompareService {

    private data: { matches: string;} = { matches: "" };

    constructor(public http: Http ) {

    }

    getSecondaryCompare() {
        var url = '../assets/secondary.json';
        return new Promise(resolve => {
            this.http.get(url, {

            }).map(res => res.json()).subscribe(resp => {
                console.log('From service ', resp);
                this.data = resp.data;
                resolve(this.data);
            }, error => {
            });
        });
    }

}