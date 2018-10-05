import { Component, OnInit } from '@angular/core';
import { FixtureService } from '../Services/fixture.service';
import {SecondaryFixtureService} from "../Services/secondary-fixture.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fixtures: any[];
  secondaryFixtures: any[];
  existIndicator = '';
  showPageContent = false;

  constructor(private service: FixtureService, private secondaryFixtureService: SecondaryFixtureService) {
    
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.fixtures = response.json();
        this.fixtures.sort((a, b) => a.start_time - b.start_time);
        //  console.log(response.json())
        });

    this.secondaryFixtureService.getAll()
      .subscribe(response => {
          this.secondaryFixtures = response.json();
          this.secondaryFixtures.sort((a, b) => a.start_time - b.start_time);
          this.showPageContent = true;
          //  console.log(response.json())
      })
  }

}
