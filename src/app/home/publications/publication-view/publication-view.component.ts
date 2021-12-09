import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-publication-view',
  templateUrl: './publication-view.component.html',
  styleUrls: ['./publication-view.component.scss'],
})
export class PublicationViewComponent implements OnInit {
  id: number;
  post: Post;
  constructor(
    private callNumber: CallNumber,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => (this.id = +params.id));
    this.post = this.postService.allPosts.find(
      (item) => +item.idPost === +this.id
    );
  }
  onCall() {
    this.callNumber
      .callNumber(this.post.phoneNumber, true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }
}
