import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { Alternative } from './alternative.model';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.scss']
})
export class AlternativeComponent implements OnInit {

    @Input() dialogRefClose: any;
    alternatives: Array<Alternative>;
    listPath: string = '/post/'
    alternativePostKinds = [
        'ask_alternative',
        'alternative'
    ];

    constructor(
        private db: DatabaseService
    ) {}

    ngOnInit() {
        this.db.list(this.listPath, {
            limitToLast: 200
        }).subscribe(posts => {
            this.alternatives = posts.filter(post => this.alternativePostKinds.indexOf(post.kind) >= 0);
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
