import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit    {
  constructor(private route:ActivatedRoute, private sdata:ProductserviceService) {

  }

  productid: any;
  singleproduct: any;
  products: any ;
  cartproducts : any = [];


  stars: number | undefined;


  generatedivs(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index);
  }

  emptystars(scount: any): number[] {
    return Array.from({ length: scount }, (_, index) => index);
  }
  addtocart() {
    this.cartproducts.push(this.singleproduct)

  }


  ngOnInit() {

    this.sdata.getproducts().subscribe((presponse) => {
      this.products = presponse;
      
        this.route.paramMap.subscribe((response)=> {
          this.productid = response.get('id');
          //console.log(this.productid)
          //console.log(this.products)
          this.singleproduct = this.products.find((product: any) => {
              return product.id == this.productid
          })

             console.log(this.singleproduct)

        })
      
    }
    )


    

  }


}
