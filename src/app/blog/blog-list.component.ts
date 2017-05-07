import { DatabaseService } from './../shared/services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  articles: any[];
  articlesObservable: Observable<any>;

  constructor(
    private db: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.articlesObservable = this.db.list('/article');
    this.articlesObservable.subscribe(articles => {
      this.articles = articles;
    })
  }

}
