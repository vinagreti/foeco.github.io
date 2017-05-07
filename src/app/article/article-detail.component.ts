import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators }    from '@angular/forms';
import { Article } from './article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: FirebaseObjectObservable<Article>;
  articles: FirebaseListObservable<Array<Article>>;
  articleForm: FormGroup;
  routeSubscription: any;

  constructor(
    private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  	this.createArticleForm();
  }

  detectShortcut(event){
    if(event.ctrlKey && event.key == 's'){
      event.preventDefault();
      event.stopPropagation();
      this.save(this.articleForm.value);
    }
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
    	let id = params['id'];
    	if(id && id != 'article'){
    		this.article = this.af.database.object('/article/'+id);
    		this.article.subscribe((article: Article) => {
    			this.articleForm.setValue(new Article(article));
    		});
    	} else {
    		this.articles = this.af.database.list('/article/');
    	}
    });
  }

  createArticleForm(){
    this.articleForm = this.formBuilder.group({
      name: new FormControl(['', [Validators.required]]),
      firstParagraph: new FormControl(['', [Validators.required]]),
      content: new FormControl(['', [Validators.required]]),
    });
  }

  save(form){
  	if(this.article){
    	this.article.update(form);
  	} else {
  		this.articles.push(form)
  		.then(article2 => {
  			this.router.navigate(['articles', article2.key]);
  		})
  	}
  }

  goBack(){
  	this.router.navigate(['articles']);
  }

  removeArtcle(){
  	this.article.remove().then(res => {
  		console.log('droped');
  		this.router.navigate(['articles']);
  	})
  }

}
