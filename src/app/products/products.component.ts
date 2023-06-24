import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private productservice:ProductserviceService) { }
  allProducts: any = [];
  categorywiseProducts : any = [];
  lowtohighproducts: any;

  

  //showing products 
  showproducts() {
    this.productservice.getproducts().subscribe((productresponse)=>{
      this.allProducts = productresponse;
      

    
     

    })
  }

  sortingproducts(e:any) {
      if(e.target.value == 'ascendingproducts') {
        this.allProducts = this.allProducts.sort((a:any, b:any) => {
          return a.price - b.price;

        })
      }
    else {
      this.allProducts = this.allProducts.sort((a:any, b:any) => {
        return b.price - a.price;
    })
  }
  

  }
  
  filterByCategory () {
   
    this.allProducts.filter((product: any) => {
      if(  product.category == "men's clothing") {
 
        this.categorywiseProducts.push(product)
        this.allProducts = this.categorywiseProducts;

      }
    
     
      
    })
  }
  ngOnInit(): void {
    this.showproducts()
    this.filterByCategory()

  }

}
