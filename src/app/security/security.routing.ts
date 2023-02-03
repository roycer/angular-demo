import {Routes} from '@angular/router';
import { UserComponent } from './user/user.component';

export const SecurityRoutes: Routes = [
     {
          path: 'user',
          component: UserComponent
     }
];