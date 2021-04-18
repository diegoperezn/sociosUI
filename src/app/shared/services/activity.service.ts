import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Activity } from '../model/activity';

@Injectable({ providedIn: 'root' })
export class ActivityService {

    collection: string = "actividades";
    
    activities: Observable<{ id: string; }[]>;

    constructor(private store: AngularFirestore) {
        this.activities = this.store.collection(this.collection).valueChanges({ idField: 'id',  });

    }

    list(): Observable<{ id: string; }[]> {
        return this.activities;
    }

    save(activity: Activity): void {
        this.store.collection(this.collection).doc(activity.id).set(activity);
    }

    get(): Observable<{ id: string; }> {
        return this.store.collection(this.collection).doc("a").get();
    }

}