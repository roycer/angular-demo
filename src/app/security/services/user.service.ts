import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servidores } from 'src/app/services/servidores';

@Injectable()
export class UserService {

    private url = '/users';

    constructor(private http: HttpClient, private servidores: Servidores) {
        this.url = this.servidores.SEC + this.url;
    }

    all() {
        return this.http.get(this.url);
    }
    
    get(id: string) {
        return this.http.get(this.url + '/' + id);
    }

    add(newObj: any) {
        return this.http.post(this.url, newObj);
    }

    put(chgObj: any) {
        return this.http.put(this.url + '/' + chgObj.id, chgObj);
    }
    
    remove(id: string) {
        return this.http.delete(this.url + '/' + id);
    }

}