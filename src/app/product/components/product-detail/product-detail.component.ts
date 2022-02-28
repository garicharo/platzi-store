import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { id } = params;

      this.fetchProduct(id);
  
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct( id ).subscribe(product => {
      if ( product ) {
        this.product = product;
        console.log( product );
      }
    });      
  }

  createProduct() {
    const newProduct: Product = {
      id: '333',
      title: 'Prducto prueba',
      image: '',
      price: 2499,
      description: 'Player de algadon tipo polo'
    }
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log('Se ha agregado el producto')
      console.log(product)
    });
  }

  updateProduct() {

    console.log('sí se hace el click')

    const updateProduct: Partial<Product> = {
      price: 4899,
      description: 'Edición del titulo para pruebas del put verb en la rest api'
    }
    
    const id = '333';

    this.productsService.updateProduct(id, updateProduct).subscribe(product => {
      console.log('Se ha actualizado el producto')
      console.log(product)
    });
  }

  deleteProduct() {    
    
    const id = '333';

    this.productsService.deleteProduct(id).subscribe(response => {
      console.log('Se ha eliminado el producto');
      console.log(response)
    });
  }

}
