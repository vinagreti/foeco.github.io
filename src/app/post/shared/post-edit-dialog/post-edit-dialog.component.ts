import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from './../../post.model';
import { MdDialogRef } from '@angular/material';
import { PostEditComponent } from './../post-edit/post-edit.component';

@Component({
  selector: 'app-post-edit-dialog',
  templateUrl: './post-edit-dialog.component.html',
  styleUrls: ['./post-edit-dialog.component.scss']
})
export class PostEditDialogComponent implements OnInit {

  post: FirebaseObjectObservable<Post>;
  posts: FirebaseListObservable<Array<Post>>;

  constructor(
    private af: AngularFire,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialogRef: MdDialogRef<PostEditDialogComponent>
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
    	let id = params['id'];
    	if(id){
    		this.post = this.af.database.object('/post/'+id);
    	} else {
    		this.posts = this.af.database.list('/post/');
    	}
    });
  }
}