// Imports
import { Tree } from '@ouroboros/define';
import { Form } from '@ouroboros/define-mui';
import { normalize } from '@ouroboros/tools';
import React from 'react';

// Tree
const ExampleTree = new Tree({
	__name__: 'post',
	title: 'string',
	slug: 'string'
});

// Constants
const TITLE_TO_SLUG = /[a-z0-9-]/;

// Component
export default function FormOnNodeChange(data) {
	function titleChanged(ev) {
		const s = normalize(ev.data.title).toLowerCase();
		const l = [];
		for(const c of s.split('')) {
			if (c === ' ') {
				l.push('-');
			} else if (TITLE_TO_SLUG.test(c)) {
				l.push(c);
			}
		}
		return {
			'slug': l.join('')
		}
	}

	return (
		<Form
			onNodeChange={{ title: titleChanged }}
			onSubmit={value => console.log(value)}
			tree={ExampleTree}
			type="create"
		/>
	);
}