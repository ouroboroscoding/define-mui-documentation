// Imports
import { Tree } from '@ouroboros/define';
import { Results } from '@ouroboros/define-mui';
import { sortByKey } from '@ouroboros/tools';
import React from 'react';

// Definition
import ExampleDef from 'definition';

// Data
import DATA from 'data';

// Sort the data by 'string' node
DATA = DATA.sort(sortByKey('string'));

// Create the tree instance and merge it with UI specific info,
//	in this case, the list of fields from the definition we
//	want to see in the Results
const ExampleTree = new Tree(ExampleDef, {
	__ui__: {
		__results__: [ 'string', 'int', 'date', 'select' ],
		__primary__: 'id'
	}
});

// Component
export default function ResultsSimple(props) {
	return (
		<Results
			actions={false}
			data={DATA}
			orderBy="string"
			tree={ExampleTree}
		/>
	);
}