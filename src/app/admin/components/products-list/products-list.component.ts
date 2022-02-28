import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  columnsToDisplay: string[] = ['id', 'title', 'price', 'actions']

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    console.log('Se incia el componente de la lista de productos')
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }


  updateProduct(id: string) {
    console.log('Se ha seleccionado el producto con el id: ' + id);
  }


  deleteProduct(id: string) {
    console.log('Se va a eliminar el item con el id: ' + id);
    this.productsService.deleteProduct(id).subscribe(results => {
      if ( results ) {
        this.products = this.products.filter(item => item.id !== id);
      }
    })
  }

}
