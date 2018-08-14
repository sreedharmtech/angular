import { Component } from "@angular/core";
import { SimpleService } from "./simple.service";

@Component({
    selector: 'child',
    template: `
   <div class="child">
      <p>Child</p>
      {{ service.value }} 
   </div>
   `
   })
   export class ChildComponent {
     constructor(private service: SimpleService) { } 
   }