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

// * as user sizes screen horizontally carousel images expand to fill space on mobile view