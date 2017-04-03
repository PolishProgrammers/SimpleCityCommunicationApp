import {Component} from "@angular/core";
import {LineService} from "./line.service";
import {FormControl} from "@angular/forms";
import {Line} from "./line";
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LineService]
})
export class AppComponent {

  term = new FormControl();
  line: Line = new Line();

  constructor(private lineService: LineService) {
     this.term.valueChanges.debounceTime(400).subscribe(
      term => this.line = this.lineService.getLineById(term));
  }

}
