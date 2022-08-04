import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom //None, Native are other options
})
export class ServerComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }


}
