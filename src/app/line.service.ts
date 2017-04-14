import {Injectable} from '@angular/core';
import {Line} from './line';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LineService {


  lines: Line[] = [
    new Line({id: '1', lat: 52.2441948, lng: 20.9818523}),
    new Line({id: '2', lat: 52.2343913, lng: 20.9871748})
  ];

  constructor(private http: Http) {
  }

  getLineById(lineNumber: number): Line {
    return this.lines.filter(line => line.id === lineNumber).pop();
  }

  create(lineNumber: number, lat: number, lng: number) {
    const urlParams = new URLSearchParams();
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    urlParams.append('lineNumber', lineNumber.toLocaleString());
    urlParams.append('lat', lat.toLocaleString());
    urlParams.append('lng', lng.toLocaleString());
    return this.http.post('api/lineAdd', urlParams, options).
      map((response: Response) => {
        console.log(response.json());
    });
  }

}
