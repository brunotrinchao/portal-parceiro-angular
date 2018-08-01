import { Component, Input } from '@angular/core';

@Component({
  selector: 'par-message',
  templateUrl: './message.component.html'
})
export class MessageComponent {

  @Input() text = '';

}
