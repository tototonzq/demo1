import { ModernComponent } from './modern.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

/**
 * Layouts
 */

@NgModule({
  imports: [RouterModule],
  declarations: [ModernComponent],
  exports: [ModernComponent],
})
export class ModernModule {}
