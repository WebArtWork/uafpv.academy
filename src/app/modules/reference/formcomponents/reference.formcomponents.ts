export const referenceFormComponents = {
	formId: 'reference',
	title: 'Reference',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill reference title',
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
					value: 'fill reference description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
