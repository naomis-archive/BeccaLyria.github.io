import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Adventure } from 'src/interfaces/Adventure';
import { Assets } from 'src/interfaces/Assets';
import { Emote } from 'src/interfaces/Emote';
import { Portrait } from 'src/interfaces/Portrait';
import { Pose } from 'src/interfaces/Pose';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  private _data: Assets;
  constructor(private http: HttpClient) {
    this._data = {
      adventures: [],
      emotes: [],
      portraits: [],
      poses: [],
    };
  }

  public fetchAdventures(): Observable<Adventure[]> {
    if (this._data.adventures.length) {
      return of(this._data.adventures);
    }
    const adventures = this.http.get<Adventure[]>(
      'https://asset-list.naomi.lgbt/json/becca/adventures.json'
    );
    adventures.subscribe((adventures) => (this._data.adventures = adventures));
    return adventures;
  }

  public fetchEmotes(): Observable<Emote[]> {
    if (this._data.emotes.length) {
      return of(this._data.emotes);
    }
    const emotes = this.http.get<Emote[]>(
      'https://asset-list.naomi.lgbt/json/becca/emotes.json'
    );
    emotes.subscribe((emotes) => (this._data.emotes = emotes));
    return emotes;
  }

  public fetchPortraits(): Observable<Portrait[]> {
    if (this._data.portraits.length) {
      return of(this._data.portraits);
    }
    const portraits = this.http.get<Portrait[]>(
      'https://asset-list.naomi.lgbt/json/becca/portraits.json'
    );
    portraits.subscribe((portraits) => (this._data.portraits = portraits));
    return portraits;
  }

  public fetchPoses(): Observable<Pose[]> {
    if (this._data.poses.length) {
      return of(this._data.poses);
    }
    const poses = this.http.get<Pose[]>(
      'https://asset-list.naomi.lgbt/json/becca/poses.json'
    );
    poses.subscribe((poses) => (this._data.poses = poses));
    return poses;
  }
}
