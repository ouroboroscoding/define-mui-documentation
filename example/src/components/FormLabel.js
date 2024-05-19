import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	line1: 'string',
	line2: 'string',
	city: 'string',
	division: 'string',
	country: 'string'
});

// Component
export default function FormLabel(props) {
	return (
		<Form
			label="none"
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}