import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { TeachersGuard } from './core/guards/teacher.guard';
import { PublicComponent } from './core/theme/public/public.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const schoolPages = [
	{
		path: 'courses',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Courses'
			}
		},
		loadChildren: () =>
			import('./modules/schoolcourse/pages/courses/courses.module').then(
				(m) => m.CoursesModule
			)
	},
	{
		path: 'levels',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Levels'
			}
		},
		loadChildren: () =>
			import('./modules/schoolknowledge/pages/levels/levels.module').then(
				(m) => m.LevelsModule
			)
	},
	{
		path: 'sessions',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Sessions'
			}
		},
		loadChildren: () =>
			import(
				'./modules/schoolsession/pages/sessions/sessions.module'
			).then((m) => m.SessionsModule)
	},
	{
		path: 'lessons',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Lessons'
			}
		},
		loadChildren: () =>
			import('./modules/schoollesson/pages/lessons/lessons.module').then(
				(m) => m.LessonsModule
			)
	},
	{
		path: 'tests',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Tests'
			}
		},
		loadChildren: () =>
			import('./modules/schooltest/pages/tests/tests.module').then(
				(m) => m.TestsModule
			)
	},
	{
		path: 'certificates',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Certificates'
			}
		},
		loadChildren: () =>
			import(
				'./modules/schoolcertificate/pages/certificates/certificates.module'
			).then((m) => m.CertificatesModule)
	},
	{
		path: 'products',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Products'
			}
		},
		loadChildren: () =>
			import(
				'./modules/commerce/pages/commerceproducts/commerceproducts.module'
			).then((m) => m.CommerceproductsModule)
	}
];

const routes: Routes = [
	{
		path: '',
		redirectTo: '/courses',
		pathMatch: 'full'
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			},
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		component: PublicComponent,
		canActivate: [AuthenticatedGuard],
		children: [
			{
				path: 'certificates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Certificates'
					}
				},
				loadChildren: () =>
					import(
						'./pages/user/certificates/certificates.module'
					).then((m) => m.CertificatesModule)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			},
			{
				path: 'files',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Files'
					}
				},
				loadChildren: () =>
					import('./core/modules/file/pages/files/files.module').then(
						(m) => m.FilesModule
					)
			}
		]
	},
	{
		path: '',
		component: PublicComponent,
		children: [
			/* user */
			{
				path: 'certificate',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Certificate'
					}
				},
				loadChildren: () =>
					import('./pages/user/certificate/certificate.module').then(
						(m) => m.CertificateModule
					)
			},
			{
				path: 'courses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Courses'
					}
				},
				loadChildren: () =>
					import('./pages/user/courses/courses.module').then(
						(m) => m.CoursesModule
					)
			},
			{
				path: 'course',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Course'
					}
				},
				loadChildren: () =>
					import('./pages/user/course/course.module').then(
						(m) => m.CourseModule
					)
			}
		]
	},
	{
		path: 'teacher',
		canActivate: [TeachersGuard],
		component: UserComponent,
		children: [
			/* teacher */
			...schoolPages
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			...schoolPages,
			{
				path: 'suppliers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Suppliers'
					}
				},
				loadChildren: () =>
					import(
						'./modules/supplier/pages/suppliers/suppliers.module'
					).then((m) => m.SuppliersModule)
			},
			{
				path: 'referencecertificates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Certificates'
					}
				},
				loadChildren: () =>
					import(
						'./modules/referencecertificate/pages/certificates/certificates.module'
					).then((m) => m.CertificatesModule)
			},
			{
				path: 'referencelinks',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Links'
					}
				},
				loadChildren: () =>
					import(
						'./modules/referencelink/pages/links/links.module'
					).then((m) => m.LinksModule)
			},
			{
				path: 'references',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'References'
					}
				},
				loadChildren: () =>
					import(
						'./modules/reference/pages/references/references.module'
					).then((m) => m.ReferencesModule)
			},
			{
				path: 'schools',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Schools'
					}
				},
				loadChildren: () =>
					import(
						'./modules/school/pages/schools/schools.module'
					).then((m) => m.SchoolsModule)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'courses',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		GuestComponent,
		UserComponent,
		PublicComponent
	],
	imports: [
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: 'Українська FPV Академія',
					titleSuffix: ' | Українська FPV Академія',
					'og:image': 'https://uafpv.academy/assets/image.webp'
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard,
		TeachersGuard,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
