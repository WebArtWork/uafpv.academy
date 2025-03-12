import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SuppliersComponent } from './suppliers.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: SuppliersComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [SuppliersComponent],
	providers: []
})
export class SuppliersModule {}
