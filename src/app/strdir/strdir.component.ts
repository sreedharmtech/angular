import { Component } from "@angular/core";

@Component({
    selector: 'strcomp',
    templateUrl: './strdir.component.html',
    styleUrls: ['./strdir.component.css']
  })
  export class StrdirComponent {
    name:string;
    condition = false;
    constructor() {
      this.name = 'Angular2'
  }