import { Component } from "@angular/core";
import { SimpleService } from "./simple.service";

@Component({
    selector: 'parent',
    template: `
   <div class="parent">
      <p>Parent</p>
      <form novalidate>
           <div class="form-group">
           <input type="text"
                  class="form-control"
                  name="value"
                  [(ngModel)]="service.value"> 
         </div>
     </form>
     <child></child> 
   </div>
   `,
    providers: [ SimpleService ]
   })
   export class ParentComponent {
     constructor(private service: SimpleService) { } 
   }