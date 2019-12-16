import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss'],
})
export class MycomponentComponent implements OnInit {

  constructor() { }
 @Input() url;
  ngOnInit() {}

}
