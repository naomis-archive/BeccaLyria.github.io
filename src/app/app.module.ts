import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BioComponent } from './bio/bio.component';
import { GamesComponent } from './games/games.component';
import { Router } from '@angular/router';
import { EmotesComponent } from './emotes/emotes.component';
import { FooterComponent } from './footer/footer.component';
import { BeccaComponent } from './becca/becca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    BioComponent,
    GamesComponent,
    EmotesComponent,
    FooterComponent,
    BeccaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
