import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_alert';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})

export class ProfileEditorComponent implements OnInit {
  constructor(public alertService: AlertService, private fb: FormBuilder) { }

  public options = {
    autoClose: false,
    keepAfterRouteChange: false
  }

  public profileForm = this.fb.group({
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

  public get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  public addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }

  public setAddressValues(): void {
    console.log('profile-editor -> setAddressValues():');
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
  }

  public updateProfile(): void {
    console.log('profile-editor -> updateProfile():');
    this.profileForm.patchValue({
      firstName: 'Batman',
      address: {
        street: '987 Arkham Asylum St.',
        city: 'Gotham'
      }
    });
  }

  public clearProfile(): void {
    console.log('profile-editor -> clearProfile():');
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
      aliases: ['']
    });
    console.log(this.profileForm.value);
  }

  public onSubmit(): void {
    console.log('profile-editor -> onSubmit():');
    console.warn(this.profileForm.value);
  }

  public ngOnInit(): void {
    console.log('profile-editor -> ngOnInit():');

    // get, valueChanges
    this.profileForm.get('firstName').valueChanges.subscribe(
      (firstNameValue) => { console.log('get firstName:', firstNameValue) })

    this.profileForm.get('lastName').valueChanges.subscribe(
      (lastNameValue) => { console.log('get lastName:', lastNameValue) })

    this.profileForm.get('address.street').valueChanges.subscribe(
      (streetValue) => { console.log('get street:', streetValue) })

    this.profileForm.get('address.city').valueChanges.subscribe(
      (cityValue) => { console.log('get city:', cityValue) })

    this.profileForm.get('address.state').valueChanges.subscribe(
      (stateValue) => { console.log('get state:', stateValue) })

    this.profileForm.get('address.zip').valueChanges.subscribe(
      (zipValue) => { console.log('get zip:', zipValue) })

    this.profileForm.get('aliases').valueChanges.subscribe(
      (aliasesValue) => {
        console.log('get aliases:', aliasesValue)
        console.log(aliasesValue.join(', '))
      })
  }
}
