import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';  
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { CustomValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    console.log( 'Se inicia el componente product form m' );
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if ( this.form.valid ) {
      const product: Product = this.form.value;
      this.productsService.createProduct( product )
        .subscribe( response => {
          console.log( response );
          this.router.navigate( ['./admin/products'] );
        })
    }
    console.log( this.form );
  }

  get priceField() {
    return this.form.get('price');
  }

}
