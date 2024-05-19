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
export default function ResultsMenu(props) {
	return (
		<Results
			data={DATA}
			menu={[ {
				callback: (data) => alert(JSON.stringify(data)),
				icon: 'fa-solid fa-exclamation',
				title: 'Alert'
			}, {
				callback: (data) => console.log(data),
				icon: 'fa-solid fa-print',
				title: 'Console'
			} ]}
			orderBy="string"
			tree={ExampleTree}
		/>
	);
}