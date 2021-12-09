import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  allPosts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.allPosts = JSON.parse(localStorage.getItem('posts'));
    this.allPosts = this.postService.allPosts;
    this.postService.filteredPosts.subscribe((res) => (this.allPosts = res));
  }
  onFilter(type: string) {
    console.log('filtered');
    this.postService.onFilter(type);
  }
}
