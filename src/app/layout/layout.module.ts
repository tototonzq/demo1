import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { EmptyModule } from './layouts/empty/empty.module';
import { ModernModule } from './layouts/vertical/modern/modern.module';

const modules = [EmptyModule, ModernModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ...modules],
  exports: [LayoutComponent],
})
export class LayoutModule {}
