import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports:[ConversationsComponent],
})
export class ConversationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}