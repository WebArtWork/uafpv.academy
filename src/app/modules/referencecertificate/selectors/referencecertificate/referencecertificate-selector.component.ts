import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ReferencecertificateService } from '../../services/referencecertificate.service';
import { Referencecertificate } from '../../interfaces/referencecertificate.interface';

@Component({
	selector: 'referencecertificate-selector',
	templateUrl: './referencecertificate-selector.component.html',
	styleUrls: ['./referencecertificate-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Referencecertificate[] {
		return this._referencecertificateService.referencecertificates;
	}

	constructor(private _referencecertificateService: ReferencecertificateService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
