import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeccaComponent } from './becca/becca.component';
import { BioComponent } from './bio/bio.component';
import { EmotesComponent } from './emotes/emotes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'bio', component: BioComponent },
  { path: 'adventures', component: GamesComponent },
  { path: 'emotes', component: EmotesComponent },
  { path: 'becca', component: BeccaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
