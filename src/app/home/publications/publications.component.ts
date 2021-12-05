import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post.model';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  authPosts: Post[] = null;
  constructor(private userAuthService: UserAuthService) {}

  ngOnInit() {
    this.authPosts = this.userAuthService.retrievedUser.posts;
    console.log(this.authPosts);
  }
}
