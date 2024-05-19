// Imports
import { Tree } from '@ouroboros/define';
import { nice } from '@ouroboros/dates';
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
export default function ResultsCustom(props) {
	return (
		<Results
			custom={{
				date: data => nice(data.date, 'en-US', 'long', false)
			}}
			data={DATA}
			orderBy="int"
			tree={ExampleTree}
		/>
	);
}