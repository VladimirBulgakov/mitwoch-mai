import { Component, OnInit, Input } from '@angular/core';
import { Typek } from "../typek";

@Component({
  selector: 'app-typek-detail',
  templateUrl: './typek-detail.component.html',
  styleUrls: ['./typek-detail.component.css']
})
export class TypekDetailComponent implements OnInit {
  @Input() typek: Typek;

  constructor() { }

  ngOnInit() {
  }

}
