import { Component } from '@angular/core';
import { FullscreenService } from 'src/app/services/fullscreen.service';

@Component({
  selector: 'app-core-header',
  templateUrl: './core-header.component.html',
  styleUrls: ['./core-header.component.scss']
})
export class CoreHeaderComponent{
  btnType = "btn";

  constructor(public fullscreenService : FullscreenService) {
    this.btnType = "fullscreen";
   }

  toggleFullscreen(){
    if(this.btnType === "fullscreen"){
      this.btnType = "fullscreenExit";
    }else{
      this.btnType = "fullscreen";
    }
    this.fullscreenService.toggleFullscreen();
  }

}
