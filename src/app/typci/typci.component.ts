import { Component, OnInit } from '@angular/core';
import { Typek } from "../typek";
import { TypekService } from '../typek.service';

@Component({
  selector: 'app-typci',
  templateUrl: './typci.component.html',
  styleUrls: ['./typci.component.css']
})
export class TypciComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Typci: Typek[];

  selectedTypek: Typek; // zopakovat " : " co to znamena,, typovani?

  onSelect(typek: Typek): void {
    this.selectedTypek = typek;
  }

}
