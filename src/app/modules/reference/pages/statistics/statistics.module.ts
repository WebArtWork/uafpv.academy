import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { StatisticsComponent } from './statistics.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: StatisticsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [StatisticsComponent]
})
export class StatisticsModule {}
