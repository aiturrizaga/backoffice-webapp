import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Sidenav } from '@/shared/components/sidenav';
import { Header } from '@/shared/components/header';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const TAILWIND_BREAKPOINTS = {
  sm: '(max-width: 639px)',
  md: '(min-width: 640px) and (max-width: 1023px)',
  lg: '(min-width: 1024px) and (max-width: 1279px)',
  xl: '(min-width: 1280px)',
};

@Component({
  selector: 'app-shell-layout',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    Sidenav,
    Header
  ],
  templateUrl: './shell-layout.html',
  styleUrl: './shell-layout.scss',
})
export class ShellLayout {
  #breakpointObserver = inject(BreakpointObserver);

  collapsed = signal<boolean>(false);

  sideNavWidth = computed(() => {
    if (this.isHandset()) {
      return '256px';
    }
    return this.collapsed() ? 'calc(.25rem*14)' : '256px';
  });

  contentMarginLeft = computed(() =>
    this.isHandset() ? '0px' : this.sideNavWidth()
  );

  isHandset = toSignal(
    this.#breakpointObserver
      .observe([TAILWIND_BREAKPOINTS.sm, TAILWIND_BREAKPOINTS.md])
      .pipe(map(result => result.matches)),
    {
      initialValue: false,
    }
  );

  toggleCollapsed(isCollapsed: boolean): void {
    this.collapsed.set(isCollapsed);
  }

}
