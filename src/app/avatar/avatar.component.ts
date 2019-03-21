import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() name: string = 'jnroji';
  @Output() buttonClicked = new EventEmitter<string>();
  img: string = ``;

  constructor() { }


  ngOnInit() {
  this.img = `https://twivatar.glitch.me/${this.name}`;
  }

  handleClick(){
    this.buttonClicked.emit(this.name);
  }

}
