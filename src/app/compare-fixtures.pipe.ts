import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compareFixtures'
})
export class CompareFixturesPipe implements PipeTransform {

  matches = "Match Exist in Secondary.json";
  noMatches = "Match Does NotExist in Secondary.json";

  transform(value: any, primaryFixtures: any, getSecondaryFixtures: any): any {

    if(primaryFixtures && getSecondaryFixtures) {

        for (let i = 0; i < getSecondaryFixtures.length; i++) {

            if(
                getSecondaryFixtures[i].team1 == primaryFixtures.team1 &&
                getSecondaryFixtures[i].team2 == primaryFixtures.team2 &&
                getSecondaryFixtures[i].sport == primaryFixtures.sport &&
                getSecondaryFixtures[i].championship == primaryFixtures.championship &&
                getSecondaryFixtures[i].start_time == primaryFixtures.start_time
            ) {
                return value = this.matches;
            }

        }

    } else {
      return console.log('Something went wrong');
    }
  
  }

}
