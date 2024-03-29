import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import {store} from './services/store/store'

import App from './components/app/app'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
)

reportWebVitals()
