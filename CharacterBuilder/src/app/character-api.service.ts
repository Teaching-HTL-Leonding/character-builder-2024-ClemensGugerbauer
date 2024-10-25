import { Injectable } from '@angular/core';
import {ResponseUrl} from "./model/ResponsUrl";

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {

  constructor() { }

  public static async buildCharacterImage(
    eyes: string,
    mouth: string,
    rightHand: string,
    hasHammer: boolean,
    hasTail: boolean)
    : Promise<ResponseUrl> {

    console.log(eyes, mouth, rightHand, hasHammer, hasTail);


    const idResponse = await fetch("http://localhost:5110/build-image-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eye: eyes,
        hasHammer: hasHammer,
        mouth: mouth,
        rightHand: rightHand,
        hasTail: hasTail
      })
    });

    if(idResponse.status == 200) {
      return await idResponse.json();
    }
    return {url: ""};

  }
}
