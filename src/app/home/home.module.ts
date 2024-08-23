import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/mainpage/main.component";

@NgModule({
    declarations:[
        HeaderComponent,
        MainComponent
    ],
    imports:[

    ],
    exports:[
        HeaderComponent,
        MainComponent
    ]

})

export class HomeModule { }