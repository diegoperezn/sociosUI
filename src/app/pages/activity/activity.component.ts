import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Activity } from '../../shared/model/activity';

@Component({
    selector: 'activity',
    template: `
        <!-- <div class="card shadow-sm">
            <img src="{{ activity.image }}"
                class="img-fluid" alt="...">

            <div class="card-body">
                <p class="card-title">{{ activity.title }}</p>
                <p class="card-text">{{ activity.description.full }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" >View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary" (click)="edit.emit(activity)">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div> -->
        <!-- <div class="row">
            <div class="col s12 m7">
            <div class="card">
                <div class="card-image">
                    <img src="{{ activity.image }}">
                    <span class="card-title">{{ activity.title }}</span>
                </div>
                <div class="card-content">
                    <p>{{ activity.description.full }}</p>
                </div>
                <div class="card-action">
                    <a class="waves-effect waves-light btn" (click)="edit.emit(activity)">edit</a>
                </div>
            </div>
            </div>
        </div> -->

        <mat-card class="card">
            <mat-card-header>
                <mat-card-title>{{ activity.title }}</mat-card-title>
                <mat-card-subtitle>{{ activity.description.brief }}</mat-card-subtitle>
            </mat-card-header>
            <img mat-card-image src="{{ activity.image }}" alt="Photo of a Shiba Inu">
            <mat-card-content>
                <p>
                    {{ activity.description.full }}
                </p>
            </mat-card-content>
            <mat-card-actions>
                <button mat-button>LIKE</button>
                <button mat-button>SHARE</button>
            </mat-card-actions>
        </mat-card>
    `,
    styles: [`
        .card {
            max-width: 340px;
        }
    `]
})
export class ActivityComponent {

    @Input()
    activity!: Activity;
    
    @Output() 
    edit = new EventEmitter<Activity>();


}