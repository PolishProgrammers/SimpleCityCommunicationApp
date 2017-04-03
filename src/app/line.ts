/**
 * Created by konra on 30.03.2017.
 */
export class Line {
  id: number;
  lat: number;
  lng: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
