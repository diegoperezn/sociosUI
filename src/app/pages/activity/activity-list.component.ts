import { Component, OnInit } from '@angular/core';
import { Activity } from '../../shared/model/activity';
import { ActivityService } from 'src/app/shared/services/activity.service';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <!-- <div class="grid-container"> -->
      <h1 class="mat-h1">Actividades</h1>
      <!-- <mat-grid-list [cols]="cols">
        <mat-grid-tile *ngFor="let activity of activities" [colspan]="1" [rowspan]="1"> -->
          <activity *ngFor="let activity of activities"  (edit)="editTask(activity)" [activity]="activity"></activity>
        <!-- </mat-grid-tile>
      </mat-grid-list> -->
    <!-- </div> -->
  `,
  styles: [`

  `]
})
export class ActivityListComponent implements OnInit {
  title = 'Actividades';

  activities: Activity[] = [];
  editActivity!: Activity;
  cols: number = 3;

  isHandset: boolean = false;
  isHandsetObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.cols = 1
        return true;
      }
      this.cols = 3
      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private service: ActivityService) { };

  ngOnInit(): void {
    this.isHandsetObserver.subscribe(currentObserverValue => {
      this.isHandset = currentObserverValue;
    });

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