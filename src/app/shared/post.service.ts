import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';
import { UserAuthService } from './user-auth.service';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  allPosts: Post[];
  filteredPosts = new Subject<Post[]>();
  constructor(private userAuthService: UserAuthService) {}

  onFilter(filterType: string) {
    this.filteredPosts.next(this.allPosts);
    if (filterType === 'location') {
      this.filteredPosts.next(
        this.allPosts.filter(
          (post) =>
            post.location === this.userAuthService.retrievedUser.location
        )
      );
    }
    if (filterType === 'date') {
      this.filteredPosts.next(
        this.allPosts.sort(
          (a, b) =>
            this.getTime(new Date(a.date)) - this.getTime(new Date(b.date))
        )
      );
    }
  }
  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
}
