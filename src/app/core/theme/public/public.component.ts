import { UserService } from 'src/app/modules/user/services/user.service';
import { coreAnimation } from '../../animations/core.animations';
import { Component } from '@angular/core';

@Component({
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.scss'],
	animations: [coreAnimation],
	standalone: false
})
export class PublicComponent {
	constructor(public us: UserService) {}
}
