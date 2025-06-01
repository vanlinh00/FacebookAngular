import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent {
  @Input() friends: string[] = [];
  @Input() groups: string[] = [];
}
