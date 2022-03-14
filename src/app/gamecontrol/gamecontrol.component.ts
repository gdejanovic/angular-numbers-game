import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss']
})
export class GamecontrolComponent implements OnInit {
  gametimer : any;
  numberFired: number = 0 ;

  onStart() {
    this.gametimer = setInterval(() => {
      this.numberFired = (this.numberFired +1);
      this.numberFired++;
    },1000);
      console.log(this.numberFired)
  }
  onPause() {
    clearInterval(this.gametimer);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
