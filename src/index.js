import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state
  }
}
const rootReducer = combineReducers({
  login: authReducer,
})
// function LoginAction(payload) {
//   return {
//     type: "LOGIN",
//     payload: payload
//   };
// }
// export { LoginAction };
const store = createStore(rootReducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
