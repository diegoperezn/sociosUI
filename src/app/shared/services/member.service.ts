import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Member } from '../model/member';

@Injectable({ providedIn: 'root' })
export class MemberService {


    collection: string = "socios";

    items: Observable<{ id: string; }[]>;

    constructor(private store: AngularFirestore) {
        this.items = this.store.collection(this.collection).valueChanges({ idField: 'id', });
    }

    list(): Observable<{ id: string; }[]> {
        console.log('getting socios list', this.items)
        return this.items;
    }

    save(member: Member): void {
        this.store.collection(this.collection).doc(member.id).set(member);
    }

    get(id: string): Observable<{ id: string; } | undefined> {
        console.log('looking for member: ' + id)
        return this.store.collection(this.collection).doc(id).valueChanges({ idField: 'id', });
    }

    delete(id: string) {
        this.store.collection(this.collection).doc(id).delete();
    }

}