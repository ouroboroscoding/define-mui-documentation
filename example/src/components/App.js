/**
 * App
 *
 * Primary entry into the app
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @created 2024-04-19
 */

// CSS
import 'app.scss';

// NPM modules
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Material UI
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { StyledEngineProvider } from '@mui/material/styles';

// Tabs
import FormSimple from 'components/FormSimple';
import FormDisplay from 'components/FormDisplay';
import FormDynamicOptions from 'components/FormDynamicOptions';
import FormGridSizes from 'components/FormGridSizes';
import FormLabel from 'components/FormLabel';
import FormOnCancel from 'components/FormOnCancel';
import FormOnNodeChange from 'components/FormOnNodeChange';
import FormTitle from 'components/FormTitle';
import FormVariant from 'components/FormVariant';
import ResultsSimple from 'components/ResultsSimple';
import ResultsActions from 'components/ResultsActions';
import ResultsCustom from 'components/ResultsCustom';
import ResultsDisplay from 'components/ResultsDisplay';
import ResultsMenu from 'components/ResultsMenu';
import ResultsOnDelete from 'components/ResultsOnDelete';
import ResultsOnKeyCopy from 'components/ResultsOnKeyCopy';

// Tab indexes to types
const TABS = [
	[ 'Form.simple', FormSimple ],
	[ 'Form.display', FormDisplay ],
	[ 'Form.dynamicOptions', FormDynamicOptions ],
	[ 'Form.gridSizes', FormGridSizes ],
	[ 'Form.label', FormLabel ],
	[ 'Form.onCancel', FormOnCancel ],
	[ 'Form.onNodeChange', FormOnNodeChange ],
	[ 'Form.title', FormTitle ],
	[ 'Form.variant', FormVariant ],
	[ 'Results.simple', ResultsSimple ],
	[ 'Results.actions', ResultsActions ],
	[ 'Results.custom', ResultsCustom ],
	[ 'Results.display', ResultsDisplay ],
	[ 'Results.menu', ResultsMenu ],
	[ 'Results.onDelete', ResultsOnDelete ],
	[ 'Results.onKeyCopy', ResultsOnKeyCopy ]
];

/**
 * App
 *
 * Primary site component
 *
 * @name App
 * @access public
 * @param Object props Properties passed to the component
 * @return React.Component
 */
export default function App(props) {

	// State
	const [ tab, tabSet ] = useState(0);

	// Get the component
	const Component = TABS[tab][1];

	return (
		<StyledEngineProvider injectFirst={true}>
			<BrowserRouter>
				<Box id="example">
					<Tabs
						id="example_tabs"
						onChange={(ev, i) => tabSet(i)}
						scrollButtons="auto"
						value={tab}
						variant="scrollable"
					>
						{TABS.map((l, i) =>
							<Tab
								className={tab === i ? 'selected' : ''}
								key={i}
								label={l[0]}
							/>
						)}
					</Tabs>
					<br />
					<Component />
				</Box>
			</BrowserRouter>
		</StyledEngineProvider>
	);
}