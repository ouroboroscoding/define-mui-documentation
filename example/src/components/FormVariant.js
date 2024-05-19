import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'Address',
	division: 'string',
	country: 'string'
});

// Component
export default function FormVariant(props) {
	return (<>
		<Form
			onSubmit={(value, key) => console.log(value, key)}
			title={true}
			tree={ExampleTree}
			type="create"
			variant="standard"
		/>
		<Form
			onSubmit={(value, key) => console.log(value, key)}
			title={true}
			tree={ExampleTree}
			type="update"
			variant="filled"
		/>
	</>);
}