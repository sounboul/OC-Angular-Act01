import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../model/post.model';
import * as firebase from 'firebase';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    firebase.database().ref('/posts')
            .on('value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPosts();
              }
            );
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.refreshData();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  deletePost(post: Post) {
    const postIndexToDelete = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToDelete, 1);
    this.refreshData();
  }

  refreshData() {
    this.savePosts();
    this.emitPosts();
  }

}
