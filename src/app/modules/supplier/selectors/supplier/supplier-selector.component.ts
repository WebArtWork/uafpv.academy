import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { SupplierService } from '../../services/supplier.service';
import { Supplier } from '../../interfaces/supplier.interface';

@Component({
	selector: 'supplier-selector',
	templateUrl: './supplier-selector.component.html',
	styleUrls: ['./supplier-selector.component.scss'],
	imports: [SelectModule],
})
export class SupplierSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Supplier[] {
		return this._supplierService.suppliers;
	}

	constructor(private _supplierService: SupplierService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
