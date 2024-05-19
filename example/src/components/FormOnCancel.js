import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React, { useState } from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	division: 'string',
	country: 'string'
});

// Component
export default function FormOnCancel(props) {
	const [ open, openSet ] = useState(true);

	if(!open) {
		return null;
	}

	return (
		<Form
			onCancel={() => openSet(false)}
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}