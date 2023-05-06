import { Component } from '@angular/core';
import { Emote } from 'src/interfaces/Emote';
import { Portrait } from 'src/interfaces/Portrait';
import { HelpersService } from '../helpers.service';
import { AssetsService } from '../assets.service';

type viewType = 'intro' | 'portrait' | 'emote' | 'pose';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  public view: viewType = 'intro';
  public portraits: Portrait[] = [];
  public emotes: Emote[] = [];
  public poses: string[] = [];
  public currentPortraitIndex = 0;
  public currentEmoteIndex = 0;
  public currentPoseIndex = 0;

  constructor(private assetService: AssetsService) {
    this.assetService.fetchPortraits().subscribe((portraits) => {
      this.portraits = portraits.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.assetService.fetchEmotes().subscribe((emotes) => {
      this.emotes = emotes.sort((a, b) => a.name.localeCompare(b.name));
    });
    this.assetService.fetchPoses().subscribe((poses) => {
      this.poses = poses.sort((a, b) =>
        HelpersService.numericSortWithHyphen(
          HelpersService.parseFileName(a),
          HelpersService.parseFileName(b)
        )
      );
    });
  }

  changeView(name: viewType) {
    this.view = name;
    window.scrollTo({ top: 0 });
  }

  nextPortrait() {
    this.currentPortraitIndex =
      this.currentPortraitIndex === this.portraits.length - 1
        ? 0
        : this.currentPortraitIndex + 1;
  }

  previousPortrait() {
    this.currentPortraitIndex =
      this.currentPortraitIndex === 0
        ? this.portraits.length - 1
        : this.currentPortraitIndex - 1;
  }

  selectPortrait(index: string) {
    this.currentPortraitIndex = parseInt(index);
  }

  nextEmote() {
    this.currentEmoteIndex =
      this.currentEmoteIndex === this.emotes.length - 1
        ? 0
        : this.currentEmoteIndex + 1;
  }

  previousEmote() {
    this.currentEmoteIndex =
      this.currentEmoteIndex === 0
        ? this.emotes.length - 1
        : this.currentEmoteIndex - 1;
  }

  selectEmote(index: string) {
    this.currentEmoteIndex = parseInt(index);
  }

  nextPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === this.poses.length - 1
        ? 0
        : this.currentPoseIndex + 1;
  }

  previousPose() {
    this.currentPoseIndex =
      this.currentPoseIndex === 0
        ? this.poses.length - 1
        : this.currentPoseIndex - 1;
  }

  selectPose(index: string) {
    this.currentPoseIndex = parseInt(index);
  }

  getPoseName(index: number) {
    const fileName = this.poses[index];
    const withoutExtension = fileName.split('.')[0];
    const [name, number] = withoutExtension.split('-');
    const titleCasedName = `${name[0].toUpperCase()}${name.slice(1)}`;
    return number ? `${titleCasedName} ${number}` : titleCasedName;
  }
}
