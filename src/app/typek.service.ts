import { Injectable } from '@angular/core';
import { Typek } from './typek';
import { TYPCI } from './mock-typci';


@Injectable()
export class TypekService {

  getTypci(): Typek[] {
  return TYPCI;
}


  constructor() { }

}
