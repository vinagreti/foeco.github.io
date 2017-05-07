import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

	articleObservable: FirebaseObjectObservable<any>;
  article: any = undefined;
	routeSubscription: any;

 	constructor(
 		private route: ActivatedRoute,
 		private af: AngularFire
 	) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
    	let id = params['id'];
    	if(id && id != 'article'){
    		this.articleObservable = this.af.database.object('/article/'+id)
        this.articleObservable.subscribe(article => {
          console.log(article);
          this.article = article;
        });
    	}
    });
  }

}
