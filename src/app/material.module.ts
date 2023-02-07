import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
