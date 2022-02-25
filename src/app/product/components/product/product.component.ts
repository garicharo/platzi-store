
import { 
    Component, 
    EventEmitter, 
    Input, 
    OnChanges, 
    OnDestroy, 
    OnInit, 
    Output, 
    SimpleChanges
} from '@angular/core'
import { Product } from '../../../core/models/product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {

    @Input()
    product!: Product;

    @Output()
    productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor() {
        console.log('1.- Se pasa por el contructor')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log( '2.- ngOnchanges' );
        console.log( changes );
    }

    ngOnInit() {
        console.log( '3.- ngOnInit' );
    }
    ngOnDestroy() {
        console.log( '5.- ngOnDestroy' )
    }

    addCart() {
        console.log('Se ha agregado al carrito');
        this.productClicked.emit(this.product.id);
    }

}