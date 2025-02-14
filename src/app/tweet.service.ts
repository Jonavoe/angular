import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface TweetResponse {
  id: string;
  idUser: string;
  msg: string;
  like: number;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  private apiUrl = 'http://localhost:3000/tweets';

  constructor(private http: HttpClient) {}

  createTweet(tweetData: {
    idUser: string;
    msg: string;
    like: number;
    createdAt: Date;
  }): Observable<TweetResponse> {
    return this.http.post<TweetResponse>(this.apiUrl, tweetData);
  }
}
