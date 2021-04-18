import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/model/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';

@Component({
  template: `
      Activities works
      <!-- <div class="">
          <h1 class="h2">Avtividades</h1>
      </div>
      <div class="container"> -->
          <div *ngIf="editActivity == null" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div *ngFor="let activity of activities"  class="col">
                  <activity (edit)="editTask(activity)" [activity]="activity"></activity>
              </div>
          </div>

          <!-- <activity-details *ngIf="editActivity !== null" (cancel)="cancelEdition()" [activity]="editActivity"></activity-details>
      </div> -->
  `,
  styles: ['']
})
export class ActivityListComponent implements OnInit {
  title = 'Actividades';

  activities: Activity[] = [];
  editActivity!: Activity;

  constructor(private service: ActivityService) { };

  ngOnInit(): void {
    this.service.list().subscribe(
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
    this.editActivity = activity;
    activity.description.brief = activity.description.brief + "11";

    this.service.save(activity);
    console.log(activity)
  }

  cancelEdition(): void {
    this.editActivity = null!;
  }

}