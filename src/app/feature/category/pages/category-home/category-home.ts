import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from "@ui/components/page";
import { Category } from '@/core/interfaces/category';
import { fakeCategories } from './category-home.data';

@Component({
  selector: 'app-category-home',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    Page
  ],
  templateUrl: './category-home.html',
  styles: ``,
})
export class CategoryHome {
  columns = signal<string[]>(['name', 'state']);
  categories = signal<Category[]>(fakeCategories);

  #router = inject(Router);
  #route = inject(ActivatedRoute);

  gotoCategoryDetail(category?: Category): void {
    if (category) {
      this.#router.navigate([category.id, 'edit'], {relativeTo: this.#route}).then();
    } else {
      this.#router.navigate(['register'], {relativeTo: this.#route}).then();
    }
  }

}
