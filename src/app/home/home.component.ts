import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



interface Comment {
  userName: string;
  text: string;
}

interface Post {
  userName: string;
  content: string;
  likes: number;
  comments: Comment[];
  showComments?: boolean;
  newComment?: string;
}

@Component({
  selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule],  // import CommonModule để dùng ngModel, etc.

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {
  posts = [
    {
      userName: 'Nguyễn Văn A',
      content: 'Chào mọi người, đây là bài viết đầu tiên!',
      likes: 12,
      comments: [
        { userName: 'Trần Thị B', text: 'Chào bạn!' }
      ],
      showComments: false,
      newComment: ''
    },
     {
      userName: 'Nguyễn Văn A',
      content: 'Chào mọi người, đây là bài viết đầu tiên!',
      likes: 12,
      comments: [
        { userName: 'Trần Thị B', text: 'Chào bạn!' }
      ],
      showComments: false,
      newComment: ''
    },
     {
      userName: 'Nguyễn Văn A',
      content: 'Chào mọi người, đây là bài viết đầu tiên!',
      likes: 12,
      comments: [
        { userName: 'Trần Thị B', text: 'Chào bạn!' }
      ],
      showComments: false,
      newComment: ''
    },
     {
      userName: 'Nguyễn Văn A',
      content: 'Chào mọi người, đây là bài viết đầu tiên!',
      likes: 12,
      comments: [
        { userName: 'Trần Thị B', text: 'Chào bạn!' }
      ],
      showComments: false,
      newComment: ''
    },
     {
      userName: 'Nguyễn Văn A',
      content: 'Chào mọi người, đây là bài viết đầu tiên!',
      likes: 12,
      comments: [
        { userName: 'Trần Thị B', text: 'Chào bạn!' }
      ],
      showComments: false,
      newComment: ''
    },
    {
      userName: 'Lê Văn C',
      content: 'Thời tiết hôm nay thật tuyệt!',
      likes: 8,
      comments: [],
      showComments: false,
      newComment: ''
    }
  ];

  friends = ['Trần Thị B', 'Lê Văn D', 'Phạm Thị E'];
  groups = ['Nhóm Học Tập', 'Nhóm Công Việc', 'Nhóm Game'];
  trending = ['Angular 16', 'Việt Nam thắng bóng đá', 'Giá xăng tăng'];

  likePost(post: any) {
    post.likes++;
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if(post.newComment?.trim()) {
      post.comments.push({ userName: 'Bạn', text: post.newComment.trim() });
      post.newComment = '';
    }
  }
}
