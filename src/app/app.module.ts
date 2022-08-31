import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeroComponent } from './hero/hero.component';
import { NavService } from './service/nav.service';
import { AboutComponent } from './about/about.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogsComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    RouterModule.forRoot([
      { path: 'project', component: ProjectsComponent },
    ])
  ],
  providers: [NavService, ScreenTrackingService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
