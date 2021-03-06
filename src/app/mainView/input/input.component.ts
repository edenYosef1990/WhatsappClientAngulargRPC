import { Component } from '@angular/core';
import { SignalRService } from '../../services/signalr.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'whatsapp-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class WhatsAppInputComponent {

  inputText : string

  constructor(public signalRService: SignalRService){
    this.inputText = "";
  }

  onClickSend() : void {
    var msg : MessageComponent = new MessageComponent();
    msg.text = this.inputText;
    var messages : MessageComponent[] = [msg];
    this.signalRService.setInputdata(messages);
    this.signalRService.broadcastChatData();
    
  }

  onKey(value : string) { // without type info
    this.inputText = value;
  }

  }
