import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.scss'],
})
export class PublicationItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  constructor(private router: Router) {}

  ngOnInit() {}
  onNavigate(post) {
    console.log(post);
    this.router.navigate(['home/' + this.post.idPost]);
  }
}
