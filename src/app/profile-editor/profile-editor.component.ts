import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

// not quite sure how to type the ProfileForm
// interface ProfileForm {
//   firstName: FormControl,
//   lastName: FormControl,
//   address: FormGroup({
//     street: FormControl,
//     city: FormControl,
//     state: FormControl,
//     zip: FormControl
//   })
// }

export class ProfileEditorComponent implements OnInit {
  constructor(public alertService: AlertService) { }

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  }

  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  public handleProfileFormSubmit(): void {
    console.log(this.profileForm.value);
  }

  // for Angular FormControl: status changes, value changes, getter methods
  // difference between setValue, patchValue? How to get setValue to work
  // setValue requires all values to be filled out?
  public setAddressValues(): void {
    this.profileForm.setValue({
      firstName: 'Superman',
      lastName: 'Kent',
      address: {
        street: '123 Krypton Planet',
        city: 'Metropolis',
        state: 'Krypton',
        zip: '3.1415'
      }
    });
    // this.profileForm.value.street.setValue('21 Jump Street');
    // this.profileForm.value.city.setValue('Earth');
    // this.profileForm.value.state.setValue('Pluto');
    // this.profileForm.value.zip.setValue('12345');
    // console.log(this.profileForm.value.street);
    // console.log(this.profileForm.value.city);
    // console.log(this.profileForm.value.state);
    // console.log(this.profileForm.value.zip);
  }

  public updateProfile(): void {
    this.profileForm.patchValue({
      firstName: 'Batman',
      address: {
        street: '987 Arkham Asylum St.',
        city: 'Gotham'
      }
    });
  }

  public clearForm(): void {
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    });
  }

  public onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  public ngOnInit(): void {
    console.log('options ->', this.options);
    console.log('alertService ->', this.alertService);
  }
}
