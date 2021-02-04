import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from '../_alert';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
// difference between FormArray and other forms?
import { FormArray } from '@angular/forms';

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
  constructor(public alertService: AlertService, private fb: FormBuilder) { }

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  }

  public profileForm = this.fb.group({
    // good practice to use Validators in combination with html5 input validation
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })

  public get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  public addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  // difference between formBuilder and manually creating each form element?

  // profileForm: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  public handleProfileFormSubmit(): void {
    console.log(this.profileForm.value);
  }

  // for Angular FormControl: status changes, value changes, getter methods
  // difference between setValue, patchValue? How to get setValue to work
  // setValue requires all values to be filled out?
  public setAddressValues(): void {
    // setValue, the items below must match the typing of what you are setting, including the number of aliases
    this.profileForm.setValue({
      firstName: 'SUPERMAN',
      lastName: 'Kent',
      address: {
        street: '123 Krypton Planet',
        city: 'Metropolis',
        state: 'Krypton',
        zip: '3.1415'
      },
      aliases: ['General Zod']
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
    // this.initializeAliases();
    this.clearProfile();
    // this.profileForm.patchValue({
    //   aliases: this.aliases.push(this.fb.control(''))
    // })
    console.log(typeof(this.profileForm.value.firstName))
  }

  public clearProfile(): void {
    // this.cfa(this.profileForm.value.aliases)
    this.aliases.clear();
    this.addAlias();
    this.profileForm.setValue({
      firstName: '',
      lastName: '',
      address: ({
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
      // aliases: this.aliases.clear()
      aliases: ['']
    });
    console.log(this.profileForm.value.aliases)
  }

  // public cfa = (formArray: FormArray) => {
  //   while (formArray.length !== 0) {
  //     formArray.removeAt(0)
  //   }
  // }

  // public initializeAliases(): void {
  //   this.aliases.push(this.fb.control(''))
  // }

  public onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  public ngOnInit(): void {
    console.log('options ->', this.options);
    console.log('alertService ->', this.alertService);
    console.log(this.profileForm.value.aliases);
    console.log(typeof (this.profileForm.value.aliases[0]));

    
    // valueChanges -> hook into the event
    this.profileForm.get('firstName').valueChanges.subscribe(
      (value) => {
        console.log('get firstName:', value)
      }
    )
  }
}
