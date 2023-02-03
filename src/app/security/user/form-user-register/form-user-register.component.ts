import { OnInit, Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-user-register',
    templateUrl: './form-user-register.component.html'
})
export class FormUserRegisterComponent implements OnInit {
    
    public form_user_register: FormGroup;

    @Output() user = new EventEmitter();

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    async initForm(){

        this.form_user_register = this._fb.group({
            username: ['',<any>Validators.required],
            password: ['',<any>Validators.required],
            validated_password: ['',<any>Validators.required]
        });

    }

    onSubmit(form_value:any,form_valid:any){
        if(form_valid){
            this.user.emit(form_value);
        }
    }

}