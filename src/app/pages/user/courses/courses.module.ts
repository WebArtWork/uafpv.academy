import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CoursesComponent } from './courses.component';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [CoursesComponent, SessionComponent]
})
export class CoursesModule {}
