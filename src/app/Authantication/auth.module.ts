import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations:[
        LoginComponent
    ],
    exports:[
        LoginComponent
    ],
    imports:[

    ]
})

export class AuthModule { }
