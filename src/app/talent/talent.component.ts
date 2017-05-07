import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { Talent } from './talent.model';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss']
})
export class TalentComponent implements OnInit {

    @Input() dialogRefClose: any;
    talents: Array<Talent>;
    listPath: string = '/post/'
    talentPostKinds = [
        'ask_talent',
        'talent'
    ];

    constructor(
        private db: DatabaseService
    ) {}

    ngOnInit() {
        this.db.list(this.listPath, {
            orderByChild: 'timeOrder',
            limitToLast: 200
        }).subscribe(posts => {
            this.talents = posts.filter(post => this.talentPostKinds.indexOf(post.kind) >= 0);
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
