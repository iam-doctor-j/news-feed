import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Injectable({providedIn: 'root'})
export class PostStorageService {
    constructor(private http: HttpClient) {}
    
    sendPost(post: Post, username: string) {
        this.http.post('https://news-feed-d27d5.firebaseio.com/posts/' + username + '.json', post).subscribe();
    }
}