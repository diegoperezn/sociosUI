import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/shared/services/member.service';
import { Location } from '@angular/common'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-member-edition',
  template: `
    <form [formGroup]="addressForm" novalidate (ngSubmit)="onSubmit()">
      <mat-card class="shipping-card">
        <mat-card-header>
          <mat-card-title>Creacion socio</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="row">
              <mat-form-field class="full-width">
                <input matInput placeholder="Numero Socio" formControlName="id">
              </mat-form-field>
          </div>
          <div class="row">
            <mat-form-field class="full-width">
              <input matInput placeholder="Nombre" formControlName="name">
              <mat-error *ngIf="addressForm.controls['name'].hasError('required')">
                First name is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
          <div class="row">
            <mat-form-field class="full-width">
              <input matInput placeholder="Telefono" formControlName="telefono">
              <mat-error *ngIf="addressForm.controls['telefono'].hasError('required')">
                Address is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
          <div class="row">
            <mat-form-field class="full-width">
              <input matInput placeholder="Email" formControlName="email">
              <mat-error *ngIf="addressForm.controls['email'].hasError('required')">
                Address is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" type="submit">Submit</button>
          <button mat-raised-button (click)="cancel()">Cancel</button>
        </mat-card-actions>
      </mat-card>
    </form>
    
  `,
  styles: [`
    .full-width {
      width: 100%;
    }
    
    .shipping-card {
      min-width: 120px;
      margin: 20px auto;
    }
    
    .mat-radio-button {
      display: block;
      margin: 5px 0;
    }
    
    .row {
      display: flex;
      flex-direction: row;
    }
    
    .col {
      flex: 1;
      margin-right: 20px;
    }
    
    .col:last-child {
      margin-right: 0;
    }
    
  `]
})
export class MemberEditionComponent {
  addressForm = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    telefono: [null, Validators.required],
    email: [null, Validators.required]
  });

  constructor(private location: Location,private fb: FormBuilder,private route: ActivatedRoute, private service: MemberService) { }

  ngOnInit() {
      const routeParams = this.route.snapshot.paramMap;

      this.service.get(routeParams.get('id')!).subscribe(
          {
              next: (value: any) => {
                this.addressForm.setValue(value);
              },
              error: (err: any) => { },
              complete: () => { },
            }
      );
  }
  
  onSubmit(): void {
    if (this.addressForm.valid) {
      this.service.save(this.addressForm.value);
    } else {
      alert("failed")
    }
    this.location.back();
  }

  cancel(): void {
    this.location.back();
  }
}
