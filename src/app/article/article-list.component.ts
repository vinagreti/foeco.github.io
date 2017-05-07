import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: FirebaseListObservable<any[]>;

  constructor(
    private af: AngularFire,
    private router: Router
  ) {}

  ngOnInit() {
    this.articles = this.af.database.list('/article');
  }

}
