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
export default function ResultsDisplay(props) {
	return (
		<Results
			display={{
				__results__: [
					'id', 'date', 'string', 'int'
				],
				__update__: [
					'string', 'int', 'date', 'select', 'bool'
				],
				'id': { __title__: 'ID' },
				'date': { __title__: 'Viewed' },
				'string': { __title__: 'Key' },
				'int': { __title__: 'Speed' },
				'select': {
					__title__: 'Priority',
					__options__: [
						[ 'one', 'Highest' ],
						[ 'two', 'Medium' ],
						[ 'three', 'Minimal' ]
					]
				},
				'bool': { __title__: 'Active' }
			}}
			data={DATA}
			onUpdate={(data, key) =>
				console.log(data, key)}
			orderBy="int"
			tree={ExampleTree}
		/>
	);
}