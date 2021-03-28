import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  dataLoaded = false;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
    this.dataLoaded = true;
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category:Category){//bulundugun sekmeyi belirtmek icin gorsel 
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
