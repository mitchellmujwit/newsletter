import GlobalStyle from './GlobalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import Success from './pages/Success'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component ={SignupForm}></Route>
          <Route path='/welcome' exact component ={Success}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
