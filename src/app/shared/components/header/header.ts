import { Component, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Avatar } from '@ui/components/avatar';

@Component({
  selector: 'app-header',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    Avatar
  ],
  templateUrl: './header.html',
  styles: `
    .sticky-header {
      position: sticky;
      top: 0;
      z-index: 10;
    }
  `,
})
export class Header {
  clickMenu = output<boolean>();
}
