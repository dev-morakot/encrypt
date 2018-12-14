import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Encryption } from '../models/encryption';

@Injectable()
export class EncryptionService {

    encryp: Encryption[];
    constructor(private http: HttpClient){}

    create(value: any) {
        let data = {name: value.name};
        return this.http.post<Encryption[]>("http://localhost:3000" + '/api/post', data)
            .subscribe(res=> {
                console.log(res);
                return res;
            });
    }

}