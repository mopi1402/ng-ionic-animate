import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Animation } from "../../pages/home/home";

@Injectable()
export class AnimationsProvider {

  constructor(public http: Http) {}

  public getAnimations(): Promise<Array<Animation>> {
    return new Promise<Array<Animation>>((resolve) => {
      this.http.get('assets/data/data.json')
        .map((resp: any) => JSON.parse(resp._body))
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }
}
