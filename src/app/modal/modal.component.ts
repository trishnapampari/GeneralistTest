import { Component,ViewChild ,ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() active: boolean = false;

  ngOnInit() {
   
  }

  pepito() {
    console.log("algo")
  }
}
