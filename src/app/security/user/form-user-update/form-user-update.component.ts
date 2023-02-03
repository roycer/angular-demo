import { OnInit, Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;
declare var jQuery: any;
declare var Chart: any;
declare var swal: any;

@Component({
    selector: 'app-form-user-update',
    templateUrl: './form-user-update.component.html'
})
export class FormUserUpdateComponent implements OnInit, OnChanges {
    
    public form_user_update: FormGroup;

    @Input() user:any;

    @Output() user_update = new EventEmitter(); 

    constructor(private _fb: FormBuilder){}

    ngOnInit(){
        this.initForm();
    }

    ngOnChanges(){

        if(this.user){

            this.form_user_update.controls['id'].setValue(this.user.id);
            this.form_user_update.controls['username'].setValue(this.user.username);
            this.form_user_update.controls['password'].setValue('');
            this.form_user_update.controls['validated_password'].setValue('');
            
        }
    }

    async initForm(){

        this.form_user_update = this._fb.group({
            id: ['',<any>Validators.required],
            username: ['',<any>Validators.required],
            password: [''],
            validated_password: ['']
        });

    }

    ngAfterViewInit(){
    }

    onSubmit(form_value:any, form_valid: any){
        
        if(form_valid){
            this.user_update.emit(form_value);
        }

    }

}