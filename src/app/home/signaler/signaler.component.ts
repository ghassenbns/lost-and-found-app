import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-signaler',
  templateUrl: './signaler.component.html',
  styleUrls: ['./signaler.component.scss'],
})
export class SignalerComponent implements OnInit {
  signalForm: FormGroup;
  constructor(
    private userAuthService: UserAuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }
  onSignal() {
    console.log(this.signalForm);
    if (this.signalForm.valid) {
      this.userAuthService.signaler(this.signalForm.value).subscribe(
        (response) => console.log(response),
        (err) => console.log(err),
        () => {
          this.router.navigate(['home']);
          this.toastService.openToast('Publication crée', 'success');
        }
      );
    } else {
      this.toastService.openToast(
        'Veillez corrigez les erreur soulignés',
        'danger'
      );
    }
  }
  private initForm() {
    const title = '';
    const type = 'Perdu';
    const description = '';
    const date = '';
    const imagePath = '';
    const location = '';
    const iduser = this.userAuthService.retrievedUser.id;
    this.signalForm = new FormGroup({
      title: new FormControl(title),
      type: new FormControl(type),
      description: new FormControl(description),
      date: new FormControl(date),
      imagePath: new FormControl(imagePath),
      id_user: new FormControl(iduser),
      location: new FormControl(location),
    });
  }
}
