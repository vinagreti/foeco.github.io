import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() dialogRefClose: any;
    products: Array<Product>;
    listPath: string = '/post/'
    productPostKinds = [
        'ask_product',
        'product'
    ];

    constructor(
        private db: DatabaseService
    ) {}

    ngOnInit() {
        this.db.list(this.listPath, {
            orderByChild: 'timeOrder',
            limitToLast: 200
        }).subscribe(posts => {
            this.products = posts.filter(post => this.productPostKinds.indexOf(post.kind) >= 0);
        });
    }

    likeTheNew = () => {
        alert("like the new");
    }

    remove = (post) => {
        let url = this.listPath + post.$key;
        this.db.remove(url).then(() => {
            console.log('DROPED ' + url);
        })
    }
}
