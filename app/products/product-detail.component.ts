import { Component, OnInit, OnDestroy } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IProduct } from './product'
import { ProductService } from './product.service'
import { StarComponent } from '../shared/star.component'

@Component({
	templateUrl: 'app/products/product-detail.component.html',
	directives: [StarComponent]
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Details';
	product: IProduct;
	errorMessage: string;
	imageWidth: number = 200;

	constructor(private _routeParams: RouteParams, 
				private _router: Router,
				private _productService: ProductService) {
		
	}

	ngOnInit() { 

		// + is a javascript shortcut to convert to numeric
		// let is a new keyword in ES 2015
		let id = +this._routeParams.get('id');
		this.getProduct(id);
	}

	getProduct(id: number) {
		this._productService.getProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error);
	}

	onBack(): void {
		this._router.navigate(['Products']);
	}
}