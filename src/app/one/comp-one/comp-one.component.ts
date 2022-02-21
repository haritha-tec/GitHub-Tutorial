import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent {
  name:string="haritha";
  @Input() inputprop:any;
  @Output() delete= new EventEmitter();
  
  onDelete(){
    console.log("deleted!!");
    this.delete.emit("deleted");
  }

}
