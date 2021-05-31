import MainPage from './components/MainPage'

import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className='App'>              
        <MainPage />      
    </div>
  )
}

export default App

// FUTURE DEV:

// * move images to S3 bucket
// * routing to navbar pages
// * component organization
// * remove underscores from fa social icons
// * add padding on fa social icons for browser @max-width
// * add footer element w/buried link --> dev notes pages for this site