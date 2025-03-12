export const referencelinkFormComponents = {
	formId: 'referencelink',
	title: 'Referencelink',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill referencelink title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill referencelink description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
