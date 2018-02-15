import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router'


import { Courses } from './courses';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cardHeader:string = 'คอร์สเรียนทั้งหมด';
  cardTitle:any = {title:'รายละเอียดคอร์ส'};
  courses:Courses[];
  selectCourse:Courses;
  

  constructor(private router :Router) {
   }

  ngOnInit() {
    this.courses = 
      [ 
        new Courses(1,'PHP','www.youtube.com/1'),
        new Courses(2,'JAVA','www.youtube.com/2'),
        new Courses(3,'Angular','www.youtube.com/3')
      ]
    
  }
  showCourse(course:Courses):void{
    // this.selectCourse = course;
    this.router.navigate(['/courses',course.id])
  }
  

}
