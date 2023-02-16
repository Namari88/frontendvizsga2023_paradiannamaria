import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooldalComponent } from './fooldal/fooldal.component';
import { KereskedesComponent } from './kereskedes/kereskedes.component';
import { ToysComponent } from './toys/toys.component';
import { PlushieComponent } from './plushie/plushie.component';
import { NewPlushieComponent } from './new-plushie/new-plushie.component';

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    KereskedesComponent,
    ToysComponent,
    PlushieComponent,
    NewPlushieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
