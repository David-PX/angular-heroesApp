import { NgModule } from '@angular/core';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
 exports:[
  MatAutocompleteModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule
 ]
})
export class MaterialModule { }
