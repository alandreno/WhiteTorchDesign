import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  activeImageSrc: string;
  selectedType: string;
  selectedSize: string;
  constructor() {}
  ngOnInit() {
    this.selectedType = this.uniqueTypes(this.product)[0];
    this.selectedSize = this.uniqueSizes(this.product)[0];
  }
  uniqueSizes(product: Product){
    var optionsThatContainSize = product.priceOptions.filter(function(priceOption){
      return priceOption.size;
    });

    var uniqueSizeOptions = optionsThatContainSize.map(function(priceOption){
      return priceOption.size;
    })
    return Array.from(new Set(uniqueSizeOptions));
  }
  uniqueTypes(product: Product){
    var optionsThatContainType = product.priceOptions.filter(function(priceOption){
      return priceOption.type;
    });

    var uniqueTypeOptions = optionsThatContainType.map(function(priceOption){
      return priceOption.type;
    })
    return Array.from(new Set(uniqueTypeOptions));
  }
  calculatedPrice(){
    var base = this;
    var priceOption = this.product.priceOptions.find(function(priceOption){
      return priceOption.size == base.selectedSize && priceOption.type == base.selectedType;
    });

    if (priceOption){
      return priceOption.price;
    }
  }
}
