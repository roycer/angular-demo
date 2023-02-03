import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    
    public today: number = Date.now();

    public api_users = [];

    public user_update: any;
   
    constructor(
        private userService: UserService,
        private datePipe: DatePipe
        ) {}

    ngOnInit(){
        this.getUsers();
    }
    
    async getUsers(){
        this.userService.all().subscribe((response: any) => {
            this.api_users = response.result;
        });
    }

    onRegister(user: any){

        this.userService.add(user).subscribe(
            (response:any)=>{
                alert('Registro creado');
                this.getUsers();
             },
             (error:any) => {
                alert(error.error.result);
            }
        );  
    }

    onDelete(user:any){
        this.userService.remove(user.id).subscribe((response: any) => {
            this.getUsers();
        });
    }

    onUpdate(user:any){
        this.user_update = user;
        $("#modalEdit").modal('show');
    }

    onUpdate2(user:any){
        this.userService.put(user).subscribe(
            (response:any)=>{
                $("#modalEdit").modal('hide');
                alert('Registro actualizado');
                this.getUsers();
             },
             (error:any) => {
                 alert(error.error.result);
            }
        );
    }

}

