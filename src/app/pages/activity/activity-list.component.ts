import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, sortedChanges } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Activity } from './Activity';


const getObservable = (collection: AngularFirestoreCollection<Activity>) => {
  const subject = new BehaviorSubject({});
  collection.valueChanges({ idField: 'id' }).subscribe((val: Activity[]) => subject.next(val));
  return subject;
};

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styles: ['']
})
export class ActivityListComponent implements OnInit {
  title = 'Actividades';

  // activities = getObservable(this.store.collection("actividades")).getValue;
  activities: Activity[] = [];

  constructor(private store: AngularFirestore) { };

  ngOnInit(): void {
    // getObservable(this.store.collection("actividades")).getValue;  

    this.store.collection("actividades").valueChanges({ idField: 'id' })
      .subscribe(
        {
          next: (value: any[]) => {
            console.log(value);
            this.activities = value;
          },
          error: (err: any) => { },
          complete: () => { },
        }

      );
  }

  editTask(activity: Activity): void {
    console.log(activity);
  }


}