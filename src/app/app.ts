import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class App {
  #matIconRegistry = inject(MatIconRegistry);

  constructor() {
    this.#matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
  }
}
