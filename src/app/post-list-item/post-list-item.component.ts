import { PostsService } from './../services/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsSerive: PostsService) { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0 ) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    } else {
      return '';
    }
  }

  yLoveIts() {
    this.post.loveIts++;
    this.updateData();
  }

  yDontLoveIts() {
    this.post.loveIts--;
    this.updateData();
  }

  updateData() {
    this.postsSerive.savePosts();
    this.postsSerive.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postsSerive.deletePost(post);
  }

}
