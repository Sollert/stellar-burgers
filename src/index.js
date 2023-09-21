import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from './services/store/store'

import App from './components/app/app'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
)

reportWebVitals()
