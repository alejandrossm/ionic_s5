import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  num:number=0;

  constructor() { }

  ngOnInit() {
  }

  agregar()
  {
    this.num++;
    
  }

}
