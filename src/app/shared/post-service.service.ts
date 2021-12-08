import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  filteredPosts: Post[] = [];
  constructor() {}
  onFilter(posts: Post[]) {}
}
