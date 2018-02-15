import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';

import { Courses } from './courses';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  @Input() course:Courses;

  id:number;


  constructor(private route :ActivatedRoute) { }

  ngOnInit()  {
      // this.id = this.route.snapshot.params['id'];
      this.route.params.subscribe((params:Params) => {
          this.id = params['id'];
      });

  }
  
}
