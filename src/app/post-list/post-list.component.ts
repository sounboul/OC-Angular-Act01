import { PostsService } from './../services/posts.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.loadData();
  }

  ngOnDestroy() {
    this.postsSubription.unsubscribe();
  }

  loadData() {
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

}
