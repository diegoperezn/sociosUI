import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, sortedChanges } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Activity } from '../../shared/model/activity';


@Component({
  selector: 'activity-details',
  template: `
    <label>{{ activity.id }}</label>
    <label>{{ activity.title }}</label>
    <label>{{ activity.description.brief }}</label>
    <label>{{ activity.description.full }}</label>
    <img src=" {{ activity.image }} " >

    <button type="button" class="btn btn-sm btn-outline-secondary" (click)="cancel.emit()">cancel</button>
  `,
  styles: ['']
})
export class ActivityDetailsComponent {
  
  @Input()
  activity!: Activity;
  
  @Output() 
  cancel = new EventEmitter<Activity>();
}
