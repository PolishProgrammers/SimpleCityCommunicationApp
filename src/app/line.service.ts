import { Injectable } from '@angular/core';
import {Line} from "./line";

@Injectable()
export class LineService {


  lines: Line[] = [
    new Line({id: '1', lat: 52.2441948, lng: 20.9818523}),
    new Line({id: '2', lat: 52.2343913, lng: 20.9871748})
  ]
  constructor() {}

  getLineById(term: number): Line {
    return this.lines.filter(line => line.id === term).pop();
  }

}
