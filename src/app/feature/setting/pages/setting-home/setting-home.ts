import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Page } from '@ui/components/page';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-setting-home',
  imports: [
    MatButtonModule,
    MatTabsModule,
    Page
  ],
  templateUrl: './setting-home.html',
  styles: ``,
})
export class SettingHome {
  links = ['Empresa', 'Sucursales', 'Terminales', 'Seriales', 'Empleados', 'Roles', 'Cobros', 'Tipo de cambio'];
  activeLink = this.links[0];
}
