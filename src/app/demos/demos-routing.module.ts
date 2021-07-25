import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosRoot } from './components/demos-root/demos-root.component';

import { IntroductionDemo } from './pages/introduction-demo/introduction-demo.page';
import { LoginDemo } from './pages/login-demo/login-demo.page';
import { RegistrationDemo } from './pages/registration-demo/registration-demo.page';

const routes: Routes = [
    { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    { path: '', component: DemosRoot, children:
        [
            { path: 'introduction', component: IntroductionDemo },
            { path: 'login', component: LoginDemo },
            { path: 'registration', component: RegistrationDemo },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
