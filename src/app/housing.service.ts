import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

/*
@Injectable - This is a TypeScript decorator provided by Angular. 
It tells Angular that the class is a service that can be injected into other parts of your application.

In summary, @Injectable({ providedIn: 'root' }) is a way to declare a service in Angular that is provided as a singleton at the root level, 
making it available for injection throughout the application.
*/

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  url = 'http://localhost:3001/locations';

  
  async getAllHousingLocations():
  Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName : string, lastName : string, email: string){
    console.log(`Homes application recived: firstName: ${firstName},
    lastName:${lastName}, email :${email}.`);
  }
}
