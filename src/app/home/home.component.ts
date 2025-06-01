import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    NewsFeedComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  friends = ['Bạn A', 'Bạn B', 'Bạn C'];
  groups = ['Nhóm 1', 'Nhóm 2', 'Nhóm 3'];
  trending = ['Tin nóng 1', 'Tin nóng 2', 'Tin nóng 3'];

posts = [
  {
    userName: 'Nguyễn Văn A',
    content: 'Chào mọi người!',
    likes: 12,
    comments: [
      { userName: 'Trần Thị B', text: 'Chào bạn!' },
      { userName: 'Bạn', text: 'Chúc một ngày tốt lành!' }
    ],
    showComments: false,
    newComment: ''
  },
  {
    userName: 'Trần Thị B',
    content: 'Hôm nay trời đẹp quá!',
    likes: 8,
    comments: [],
    showComments: false,
    newComment: ''
  }
];

}
