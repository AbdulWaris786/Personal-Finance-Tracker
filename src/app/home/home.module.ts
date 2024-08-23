import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/mainpage/main.component";
import { SliderBarComponent } from "./components/SliderBar/sliderbar.component";

@NgModule({
    declarations:[
        HeaderComponent,
        MainComponent,
        SliderBarComponent
    ],
    imports:[

    ],
    exports:[
        HeaderComponent,
        MainComponent,
        SliderBarComponent
    ]

})

export class HomeModule { }