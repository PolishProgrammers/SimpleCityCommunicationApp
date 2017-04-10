import {Component} from "@angular/core";
import {LineService} from "./line.service";
import {FormControl} from "@angular/forms";
import {Line} from "./line";
import "rxjs/add/operator/debounceTime";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LineService]
})
export class AppComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
  lineNumber = new FormControl();
  line: Line = new Line({id: 0, lat: 51.678418, lng: 7.809007});

  constructor(private lineService: LineService) {
    this.createFormLine();
  }

  createFormLine() {
    this.lineNumber.valueChanges.debounceTime(400).subscribe(
      lineNumber => this.line = this.lineService.getLineById(lineNumber));
  }

}
