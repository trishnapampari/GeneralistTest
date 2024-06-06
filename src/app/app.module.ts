import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { PaginationComponent } from './pagination/pagination.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from "@angular/material/card"


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CustomFilterPipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
