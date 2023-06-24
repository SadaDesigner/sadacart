import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  
  constructor(private productservice:ProductserviceService) { }
  categories:any =[]


  getmycategories() {
    this.productservice.getcategories().subscribe((res) => {
      this.categories = res;
    
    })
  }
  selectCategory(selectcategory: any) {
    //alert(selectcategory)
  }

  ngOnInit(): void {
    this.getmycategories()
  }

}
