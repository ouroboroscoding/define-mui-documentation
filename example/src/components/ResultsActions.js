// Imports
import { Tree } from '@ouroboros/define';
import { Results } from '@ouroboros/define-mui';
import { sortByKey } from '@ouroboros/tools';
import React from 'react';

// Definition
import ExampleDef from 'definition';

// Data
import DATA from 'data';

// Sort the data by 'int' node
DATA.sort(sortByKey('int'));

// Create the tree instance
const ExampleTree = new Tree(ExampleDef);

// Component
export default function ResultsActions(props) {
	return (
		<Results
			actions={[ {
				callback: (data) => alert(JSON.stringify(data)),
				icon: 'fa-solid fa-exclamation',
				tooltip: 'Alert'
			}, {
				component: ({ value }) => <pre>{JSON.stringify(value, null, 4)}</pre>,
				icon: 'fa-solid fa-database',
				title: 'Render'
			}, {
				dynamic: (data) => ({
					url: `https://www.google.com/search?q=${data.string}`
				}),
				icon: 'fa-solid fa-up-right-from-square',
				tooltip: 'Google it',
				url_pop: true
			} ]}
			data={DATA}
			orderBy="int"
			tree={ExampleTree}
		/>
	);
}