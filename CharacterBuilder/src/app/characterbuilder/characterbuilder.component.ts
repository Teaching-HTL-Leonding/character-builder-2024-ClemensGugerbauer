import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-characterbuilder',
  standalone: true,
  imports: [],
  templateUrl: './characterbuilder.component.html',
  styleUrl: './characterbuilder.component.css'
})
export class CharacterbuilderComponent {


  eyes = signal("");
  hasHammer = signal(false);
  mouth = signal("");
  rightHand = signal("");
  hasTail = signal(false);


}
