import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CharacterApiService} from "../character-api.service";
import {ResponseUrl} from "../model/ResponsUrl";

@Component({
  selector: 'app-characterbuilder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './characterbuilder.component.html',
  styleUrl: './characterbuilder.component.css'
})
export class CharacterbuilderComponent {


  eyes = signal("");
  hasHammer = signal(false);
  mouth = signal("");
  rightHand = signal("");
  hasTail = signal(false);


  async onBuildImageBtnClick() {

    if(this.eyes() == "" || this.mouth() == "" || this.rightHand() == "") {
      alert("Please select an option for each feature.");
      return;
    }

    console.log(this.eyes(), this.mouth(), this.rightHand(), this.hasHammer(), this.hasTail());

    const pictureUrl: ResponseUrl = await CharacterApiService.buildCharacterImage(
      this.eyes(),
      this.mouth(),
      this.rightHand(),
      this.hasHammer(),
      this.hasTail()
    );

    console.log(pictureUrl);

    if(pictureUrl.url != "") {

      document.getElementById("character-image")!.setAttribute("src", pictureUrl.url);
    }
  }
}
