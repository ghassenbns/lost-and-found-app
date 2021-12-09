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
      console.log('true', this.userAuthService.retrievedUser.location);

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
            this.getTime(new Date(b.date)) - this.getTime(new Date(a.date))
        )
      );
    }
    if (filterType === 'Trouvé') {
      this.filteredPosts.next(
        this.allPosts.filter((post) => post.type === 'Trouvé')
      );
    }
    if (filterType === 'Perdu') {
      this.filteredPosts.next(
        this.allPosts.filter((post) => post.type === 'Perdu')
      );
    }
  }
  private getTime(date?: Date) {
    return date != null ? date.getTime() : 0;
  }
}
