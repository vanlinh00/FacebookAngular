import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Thêm import này để dùng ngModel


interface Comment {
  userName: string;
  text: string;
}

interface Post {
  userName: string;
  content: string;
  likes: number;

    comments: Comment[];
  showComments?: boolean;  // trạng thái hiện/ẩn bình luận
  newComment?: string;     // nội dung bình luận mới
}



@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, FormsModule], // Thêm FormsModule vào imports

  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent {
  @Input() posts: Post[] = [];

  like(post: Post) {
    post.likes++;
  }

   toggleComments(post: Post) {
    post.showComments = !post.showComments;
  }

  addComment(post: Post) {
    if (post.newComment && post.newComment.trim() !== '') {
      post.comments.push({ userName: 'Bạn', text: post.newComment });
      post.newComment = '';
    }
  }

  newPostContent: string = '';

  createPost() {
  const content = this.newPostContent.trim();
  if (content) {
    this.posts.unshift({
      userName: 'Bạn',
      content: content,
      likes: 0,
      comments: [],
      showComments: false,
      newComment: ''
    });
    this.newPostContent = '';
  }}
}
