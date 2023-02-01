import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

 change = true

 school = true

 clicked(){
  this.change = !this.change
 }



 showhide(){
  this.school  =  !this.school
 }

}
