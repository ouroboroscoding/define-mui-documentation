
// Imports
import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import React from 'react';

// Definition
import ExampleDef from 'definition.json';

// Create the tree instance and merge it with UI specific info,
//	in this case, the list of fields from the definition we
//	want to see in the Form
const ExampleTree = new Tree(ExampleDef, {
	__ui__: {
		__create__: [ 'string', 'int', 'date', 'select', 'bool' ]
	}
});

// Component
export default function FormSimple(props) {
	return (
		<Form
			onSubmit={(value) => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}