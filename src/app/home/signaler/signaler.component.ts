import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { UserAuthService } from 'src/app/shared/user-auth.service';

@Component({
  selector: 'app-signaler',
  templateUrl: './signaler.component.html',
  styleUrls: ['./signaler.component.scss'],
})
export class SignalerComponent implements OnInit {
  listGouvernorat = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabes',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Mahdia',
    'Manouba',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan',
  ];
  signalForm: FormGroup;
  public imageSrc: string;
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

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  handleReaderLoaded(e) {
    const reader = e.target;
    console.log('target', e.target);
    this.imageSrc = reader.result;
    this.signalForm.controls.imagePath.setValue(this.imageSrc);
  }

  private initForm() {
    const title = '';
    const type = 'Perdu';
    const description = '';
    const date = '';
    const imagePath = '';
    const location = '';
    const iduser = this.userAuthService.retrievedUser.id;
    const phoneNumber = this.userAuthService.retrievedUser.phoneNumber;
    this.signalForm = new FormGroup({
      title: new FormControl(title),
      type: new FormControl(type),
      description: new FormControl(description),
      date: new FormControl(date),
      imagePath: new FormControl(imagePath),
      id_user: new FormControl(iduser),
      location: new FormControl(location),
      phoneNumber: new FormControl(phoneNumber),
    });
  }
}
