import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { ContentDetailComponent } from './content/content-detail.component';
import { LeftComponent } from './left/left.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ContentDetailComponent,
    LeftComponent,
    SidebarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:ContentComponent},
      {path:'courses',component:ContentComponent},
      {path:'courses/:id',component:ContentDetailComponent},
      {path:'about',component:AboutComponent}
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
