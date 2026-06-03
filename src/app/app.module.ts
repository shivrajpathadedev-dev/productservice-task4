import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';

 import {MatButtonModule} from '@angular/material/button';
  import {MatIconModule} from '@angular/material/icon';
  import {MatCardModule} from '@angular/material/card';
  import {MatDialogModule} from '@angular/material/dialog';
  import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    ProductCardComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
      MatButtonModule,
    MatIconModule,
    MatCardModule,
MatDialogModule,
MatSnackBarModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
