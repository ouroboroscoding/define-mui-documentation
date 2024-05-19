// Imports
import { Tree } from '@ouroboros/define';
import { Results } from '@ouroboros/define-mui';
import { sortByKey, arrayFindDelete } from '@ouroboros/tools';
import React, { useState } from 'react';

// Definition
import ExampleDef from 'definition';

// Data
import DATA from 'data';

// Sort the data by 'string' node
DATA.sort(sortByKey('string'));

// Create the tree instance
const ExampleTree = new Tree(ExampleDef);

// Component
export default function ResultsOnDelete(props) {
	const [ data, dataSet ] = useState(DATA);

	function onDelete(key) {
		dataSet(l => arrayFindDelete(l, 'id', key, true));
	}

	return (
		<Results
			data={data}
			onDelete={onDelete}
			orderBy="string"
			tree={ExampleTree}
		/>
	);
}