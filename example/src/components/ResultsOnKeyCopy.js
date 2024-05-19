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
DATA.sort(sortByKey('string'));

// Create the tree instance
const ExampleTree = new Tree(ExampleDef);

// Component
export default function ResultsOnKeyCopy(props) {
	return (
		<Results
			data={DATA}
			fields={['id', 'string', 'int']}
			onKeyCopy={key => alert(`ID "${key}" copied to clipboard`)}
			orderBy="string"
			tree={ExampleTree}
		/>
	);
}