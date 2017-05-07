import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { Seed } from './seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {

    @Input() dialogRefClose: any;
    seeds: Array<Seed>;
    listPath: string = '/post/'
    seedPostKinds = [
        'ask_seed',
        'seed'
    ];

    constructor(
        private db: DatabaseService
    ) {}

    ngOnInit() {
        this.db.list(this.listPath, {
            orderByChild: 'timeOrder',
            limitToLast: 200
        }).subscribe(posts => {
            this.seeds = posts.filter(post => this.seedPostKinds.indexOf(post.kind) >= 0);
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
