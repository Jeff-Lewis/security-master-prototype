import { Component, Input, OnInit } from '@angular/core';
import { Timeline, TimelineElement, TimelineMoment } from '../../models/timeline-models';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() moments: TimelineMoment[];

  elements: TimelineElement[];
  timeline: Timeline;

  constructor() { }

  ngOnInit() {
    this.loadMoments();
  }

  ngOnChange() {
    this.loadMoments();
  }

  private loadMoments() {
    if (!this.moments) return;    
    this.timeline = Timeline.create(this.moments);
  }
}
