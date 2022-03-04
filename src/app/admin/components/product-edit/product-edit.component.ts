import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CustomValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string = '';

  constructor( 
      private formBuilder: FormBuilder, 
      private productsService: ProductsService,
      private router: Router,
      private activatedRoute: ActivatedRoute  
  ) {
      this.form = this.buildForm();
      console.log('Se escribe el mensaje para el constructor')
  }

  ngOnInit(): void {
    console.log( 'Se escribe mensaje para la creación del componente de edición' );

    this.activatedRoute.params.subscribe( ( params: Params) => {
      this.id = params['id'];
      this.productsService.getProduct(this.id).subscribe( product => {
        this.form.patchValue( product );
      })
    })

  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [{value: '', disabled: true}, [Validators.required]],
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
      this.productsService.updateProduct(this.id, product )
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
