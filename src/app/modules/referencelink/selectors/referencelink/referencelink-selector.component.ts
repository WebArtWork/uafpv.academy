import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ReferencelinkService } from '../../services/referencelink.service';
import { Referencelink } from '../../interfaces/referencelink.interface';

@Component({
	selector: 'referencelink-selector',
	templateUrl: './referencelink-selector.component.html',
	styleUrls: ['./referencelink-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Referencelink[] {
		return this._referencelinkService.referencelinks;
	}

	constructor(private _referencelinkService: ReferencelinkService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
