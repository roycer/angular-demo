import { OnInit, Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var Chart: any;
declare var $: any;
declare var swal: any;

@Component({
    selector: 'app-table-user',
    templateUrl: './table-user.component.html'
})
export class TableUserComponent implements OnInit, OnChanges{

    @Input() users: [];

    @Output() update = new EventEmitter();
    @Output() delete = new EventEmitter();

    public temp_users = [];

    constructor(){}

    ngOnInit(){}

    ngOnChanges(){
        if(this.users && this.users.length > 0)
        this.temp_users = [...this.users];
    }

    onClickUpdate(e_user:any){
        this.update.emit(e_user);
    }

    onClickDelete(e_user:any){

        let these = this;

        swal({
            title: "¿Está seguro que desea eliminar?",
            text: "Una vez eliminado no podrá recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#dd6b55',
            cancelButtonColor: '#999',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            dangerMode: true,
        }, function(){
            these.delete.emit(e_user);
        })

    }

    onKeyUp(e_keyup:any){

        const val = e_keyup.target.value.toLowerCase();

        const temp = this.users.filter(function(d:any) {
            if (d.username && d.username.toLowerCase().indexOf(val) !== -1 || !val)
                return true;
        });

        this.temp_users = temp;
    }
}