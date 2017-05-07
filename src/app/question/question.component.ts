import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

    @Input() dialogRefClose: any;
    questions: Array<Question>;
    listPath: string = '/post/'
    questionPostKinds = [
        'ask_question',
        'ask_knowledge',
        'knowledge'
    ];

    constructor(
        private db: DatabaseService
    ) {}

    ngOnInit() {
        this.db.list(this.listPath, {
            orderByChild: 'timeOrder',
            limitToLast: 200
        }).subscribe(posts => {
            this.questions = posts.filter(post => this.questionPostKinds.indexOf(post.kind) >= 0);
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
