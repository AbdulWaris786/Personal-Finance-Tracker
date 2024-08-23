import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent
    ],
    exports:[
        LoginComponent,
        SignupComponent
    ],
    imports:[

    ]
})

export class AuthModule { }
