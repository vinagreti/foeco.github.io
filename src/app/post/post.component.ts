import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../shared/services/database/database.service';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	posts: Array<Post>;
	listPath: string = '/post/'

	constructor(
		private db: DatabaseService
	) { }

	ngOnInit() {
		this.db.list(this.listPath).subscribe(posts => {
			this.posts = posts;
		});
	}

	remove = (post) => {
		let url = this.listPath + post.$key;
		this.db.remove(url).then(() => {
			console.log('DROPED ' + url);
		})
	}

	toggleStar = (postRef, uid) => {
	  postRef.transaction((post) => {
	    if (post) {
	      if (post.stars && post.stars[uid]) {
	        post.starCount--;
	        post.stars[uid] = null;
	      } else {
	        post.starCount++;
	        if (!post.stars) {
	          post.stars = {};
	        }
	        post.stars[uid] = true;
	      }
	    }
	    return post;
	  });
	}

}
