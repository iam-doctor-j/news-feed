import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private http: HttpClient) {}

    createProfile(user: User) {
        this.http.post('https://news-feed-d27d5.firebaseio.com/users.json', user).subscribe();
    }
}
