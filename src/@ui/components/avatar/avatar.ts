import { Component, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [
    MatTooltipModule,
    NgClass
  ],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {
  label = input.required<string>();
  size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  shape = input<'circle' | 'square'>('circle');
  styleClass = input<string>('');

  get sizeClass(): string {
    return `avatar--${ this.size() }`;
  }

  get shapeClass(): string {
    return this.shape() === 'square' ? 'avatar--rectangle' : 'avatar--rounded';
  }

  get initials(): string {
    if (!this.label()) return '';
    return this.label()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  }
}

