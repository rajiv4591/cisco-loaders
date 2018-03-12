import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loader: string = 'Alternate';

  onLoaderChange(loader) {
    this.loader = loader;
  }
}
