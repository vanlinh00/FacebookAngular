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
    imageUrl?: string | null;  // thêm trường ảnh

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

  newPostContent: string = '';
  selectedImageFile: File | null = null;
  imagePreview: string | null = null;

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

  // Khi chọn file ảnh
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.selectedImageFile = input.files[0];

    // Hiển thị preview ảnh
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.selectedImageFile);
  }

  // Xóa ảnh đã chọn
  removeImage() {
    this.selectedImageFile = null;
    this.imagePreview = null;
  }

  createPost() {
    const content = this.newPostContent.trim();
    if (!content && !this.selectedImageFile) return; // Phải có nội dung hoặc ảnh mới đăng

    // Nếu có ảnh, lấy ảnh base64 làm imageUrl
    let imageUrl = null;
    if (this.imagePreview) {
      imageUrl = this.imagePreview;
    }

    this.posts.unshift({
      userName: 'Bạn',
      content: content,
      likes: 0,
      comments: [],
      showComments: false,
      newComment: '',
      imageUrl: imageUrl, // thêm trường ảnh
    });

    // Reset
    this.newPostContent = '';
    this.removeImage();
  }
}
