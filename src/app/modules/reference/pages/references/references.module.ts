import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ReferencesComponent } from './references.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ReferencesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [ReferencesComponent],
	providers: []
})
export class ReferencesModule {}
