import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  categories = null;
  message = "";
  constructor(private cs:CategoryService) { }

  ngOnInit() {
    this.cs.selectCategory().subscribe(
      (data) => {
        if(data['result'] == 'success'){
          this.categories=data['data'];
          }else{
          this.message=data['result'];
        }
    });
  }

}
