import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';
import { ToastService } from 'src/app/shared/toast.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  allPosts: Post[];
  filterState: boolean;
  activatedFilter: string;
  constructor(
    private postService: PostService,
    private userAuthService: UserAuthService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.activatedFilter = null;
    this.userAuthService.getAllPosts().subscribe(
      (response: Post[]) => (this.allPosts = response),
      () => {
        this.toastService.openToast(
          'Erreur de connection au serveur',
          'danger'
        );
      },
      () => {
        this.postService.allPosts = this.allPosts;
        this.subscription = this.postService.filteredPosts.subscribe(
          (res) => (this.allPosts = res)
        );
      }
    );
  }
  onFilter(type: string) {
    this.activatedFilter = type;
    this.postService.onFilter(type);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
