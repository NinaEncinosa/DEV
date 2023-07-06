import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-icon',
  templateUrl: './btn-icon.component.html',
  styleUrls: ['./btn-icon.component.scss']
})
export class BtnIconComponent {
  @Input() type="";
  baseUrl = "../assets/icons/";

}
