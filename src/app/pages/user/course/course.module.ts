import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CourseComponent } from './course.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { LessonComponent } from './lesson/lesson.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
	{
		path: ':course_id',
		component: CourseComponent
	},
	{
		path: ':course_id/:session_id',
		component: CourseComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [
		CourseComponent,
		ViewComponent,
		LessonComponent,
		BuyComponent
	]
})
export class CourseModule {}
