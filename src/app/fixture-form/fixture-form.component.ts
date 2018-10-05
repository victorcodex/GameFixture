import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FixtureService } from '../Services/fixture.service';
import { SecondaryFixtureService } from '../Services/secondary-fixture.service';

@Component({
  selector: 'app-fixture-form',
  templateUrl: './fixture-form.component.html',
  styleUrls: ['./fixture-form.component.css']
})
export class FixtureFormComponent implements OnInit {
  id;
  fixtures = [];
  fixture = {};
  secondaryFixture;
  matchExist: boolean;

  constructor(private route: ActivatedRoute, 
              private fixtureService: FixtureService,
              private secondaryFixtureService: SecondaryFixtureService,
              private router: Router) { 
   this.secondaryFixture = secondaryFixtureService.getAll();

    var item = this.id = this.route.snapshot.paramMap.get('id');
   if (this.id) this.fixtureService.getAll().subscribe(response => {
    this.fixtures = response.json();
     
    var newItem = this.fixtures.find(item => item.id == this.id);
    this.fixture = newItem;
   
    this.secondaryFixture.subscribe(response => {
      this.fixtures = response.json();

      this.fixtures.forEach(element => {
        if(element.team1 == newItem.team1 && 
          element.team2 == newItem.team2 && 
          element.sport == newItem.sport && 
          element.championship == newItem.championship && 
          element.start_time == newItem.start_time) 
          
            this.matchExist = true;
        
       
      });
    
    })
   
    });
  }

 backToHome(){
    this.router.navigate(['/'])  
 }

  ngOnInit() {

  }

}
