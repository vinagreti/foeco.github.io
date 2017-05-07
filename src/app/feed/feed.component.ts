import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { DatabaseService } from './../shared/services/database/database.service';
import { AuthService } from './../auth/shared/auth.service'
import { User } from './../user/user.model';

class CarrouselControl {
    img_index: number = 0;

    constructor(img_index = 0){
        this.img_index = img_index;
    }
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    @Input() dialogRefClose: any;
    feed : Array<any>;
    user: User;
    
    private carrouselControls: any = {};

    private postKinds = [
        {kind: 'ask_question', kind_ptBr: "Pergunta", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'ask_knowledge', kind_ptBr: "Conhecimento", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'ask_product', kind_ptBr: "Produto", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'ask_seed', kind_ptBr: "Semente ou muda", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'ask_talent', kind_ptBr: "Talento", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'ask_alternative', kind_ptBr: "Alternativa", color: '#4183D7', category: 'ask', category_ptBr: "Busca", categoryColor: '#4183D7'},
        {kind: 'talent', kind_ptBr: "Talento", color: 'violet', category: 'offer', category_ptBr: "Oferece", categoryColor: '#1E824C'},
        {kind: 'knowledge', kind_ptBr: "Conhecimento", color: 'violet', category: 'offer', category_ptBr: "Oferece", categoryColor: '#1E824C'},
        {kind: 'product', kind_ptBr: "Produto", color: '#1E824C', category: 'offer', category_ptBr: "Oferece", categoryColor: '#1E824C'},
        {kind: 'seed', kind_ptBr: "Semente ou muda", color: 'violet', category: 'offer', category_ptBr: "Oferece", categoryColor: '#1E824C'},
        {kind: 'alternative', kind_ptBr: "Alternativa", color: 'violet', category: 'offer', category_ptBr: "Oferece", categoryColor: '#1E824C'},
    ];

    constructor(
        private auth: AuthService,
        private db: DatabaseService,
        private http: Http,
    ) {}

    ngOnInit() {
        this.db.list('post', {
            limitToLast: 200
        }).subscribe(feed => {
            console.log(feed)
            this.feed = feed.sort((a, b) => b.date - a.date);
        });

        this.auth.user
        .subscribe(user => {
            this.user = user;
        });
    }

    like = (feed) => {
        let userId = this.user.auth.uid;
        feed.likes = feed.likes ? feed.likes : {
            length: 0
        };
        if(feed.likes[userId]){
            delete feed.likes[userId]
        } else {
            feed.likes[userId] = true;
        }

        feed.likes.length = Object.keys(feed.likes).length - 1;

        if(feed.likes.length == 0){
            delete feed.likes;
        }

        this.update(feed);
    }

    dislike = (feed) => {
        let userId = this.user.auth.uid;
        feed.dislikes = feed.dislikes ? feed.dislikes : {
            length: 0
        };
        if(feed.dislikes[userId]){
            delete feed.dislikes[userId]
        } else {
            feed.dislikes[userId] = true;
        }

        feed.dislikes.length = Object.keys(feed.dislikes).length - 1;

        if(feed.dislikes.length == 0){
            delete feed.dislikes;
        }

        this.update(feed);
    }

    comment = (comment, feed) => {
        console.log(comment)
        let userId = this.user.auth.uid;
        feed.comments = feed.comments ? feed.comments : [];

        feed.comments.push(this.auth.fillAuthor({
            text: comment
        }));

        this.update(feed);
    }

    getCommentsAuthors = (feed) => {
        return "tsc tsc tsc";
    }

    haveICommented(feed){
        if(feed.comments){
            let comment = feed.comments.find((comment) => comment.author.uid == this.user.auth.uid)
            return comment ? true : false;
        } else {
            return false;
        }
    }

    update = (feed) => {
        this.db.update('post/'+feed.$key, feed)
    }

    getPostKind(kind){
        return this.postKinds.find(postKind => postKind.kind == kind);
    }

    getCarrouselConfig(feed_index){
        let carrouselControl = this.carrouselControls[feed_index];
        if(!carrouselControl){
            carrouselControl = new CarrouselControl();
            this.carrouselControls[feed_index] = carrouselControl;
        }
        return carrouselControl;
    }

    setCarrouselConfig(feed_index, img_index){
        let carrouselControl = this.getCarrouselConfig(feed_index);
        carrouselControl.img_index = img_index;
    }

    deleteComment = (comment, feed) => {
        let commentIndex = feed.comments.indexOf(comment);

        if(commentIndex > -1){
            feed.comments.splice(commentIndex, 1);
            this.update(feed);
        }
    }
}
