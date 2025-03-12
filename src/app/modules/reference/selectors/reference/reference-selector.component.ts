import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ReferenceService } from '../../services/reference.service';
import { Reference } from '../../interfaces/reference.interface';

@Component({
	selector: 'reference-selector',
	templateUrl: './reference-selector.component.html',
	styleUrls: ['./reference-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Reference[] {
		return this._referenceService.references;
	}

	constructor(private _referenceService: ReferenceService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
