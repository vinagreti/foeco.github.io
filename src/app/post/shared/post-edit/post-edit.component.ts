import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from './../../post.model';
import { DatabaseService } from './../../../shared/services/database/database.service';
import { AuthService } from './../../../auth/shared/auth.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  postObservable: Observable<Post>;
  postsObservable: Observable<Array<Post>>;
  postForm: FormGroup;
  routeSubscription: any;
  objectPath: string;
  listPath: string;
  @Input() dialogRef: any;

  constructor(
    private auth: AuthService,
    private db: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
  	this.createPostForm();
  }

  detectShortcut(event){
    if(event.ctrlKey && event.key == 's'){
      event.preventDefault();
      event.stopPropagation();
      this.save();
    }
  }

  ngOnInit() {
    this.listPath = '/post/';

    this.routeSubscription = this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.objectPath = this.listPath +id;
    		this.postObservable = this.db.object(this.objectPath);
    		this.postObservable.subscribe((post: Post) => {
    			this.postForm.setValue(new Post(post));
    		});
    	} else {
    		this.postsObservable = this.db.list('/post/');
    	}
    });
  }

  createPostForm(){
    this.postForm = this.formBuilder.group({
      'title': ['',
        [
          Validators.required,
        ]
      ],
      'text': ['',
        [

        ]
      ],
      'kind': ['',
        [
          Validators.required,
        ]
      ]
    });
  }

  save = (media?) => {
    let post = this.postForm.value;
    if(media){
      post.media = media;
    }

    post.date = firebase.database.ServerValue.TIMESTAMP;

    if(!post.$key){
      this.auth.fillAuthor(post);
    }

  	if(this.postObservable){
      this.db.update(this.objectPath, post)
  	} else {
  		this.db.push(this.listPath, post)
  		.then(post => {
        if(this.dialogRef){
          this.dialogRef.close();
        }
  		});
  	}
  }

  goBack(){
  	this.router.navigate(['posts']);
  }

  removePost(){
  	this.db.remove(this.objectPath).then(res => {
  		this.router.navigate(['posts']);
  	})
  }

}