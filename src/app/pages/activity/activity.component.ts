import { Component, Input, OnInit } from '@angular/core';
import { Activity } from './Activity';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styles: ['']
})
export class ActivityComponent implements OnInit{
  ngOnInit(): void {
      console.log(this.activity);
  }
  @Input()
    activity!: Activity;


}