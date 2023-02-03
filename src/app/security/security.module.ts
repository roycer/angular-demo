import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SsRoutes } from './security.routing';
import { UserComponent } from './user/user.component';
import { FormUserRegisterComponent } from './user/form-user-register/form-user-register.component';
import { FormUserUpdateComponent } from './user/form-user-update/form-user-update.component';
import { TableUserComponent } from './user/table-user/table-user.component';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SsRoutes),
        FormsModule,
        FileUploadModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserComponent,
        FormUserRegisterComponent,
        FormUserUpdateComponent,
        TableUserComponent
    ],
    providers: [
        DatePipe,
        UserService
    ]
})

export class SsModule { }