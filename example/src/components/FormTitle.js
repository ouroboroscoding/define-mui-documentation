import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'address',
	division: 'string',
	country: 'string'
});

// Component
export default function FormTitle(props) {
	return (<>
		<Form
			onSubmit={value => console.log(value)}
			title={true}
			tree={ExampleTree}
			type="create"
		/>
		<Form
			onSubmit={value => console.log(value)}
			title="Add Address"
			tree={ExampleTree}
			type="create"
		/>
	</>);
}