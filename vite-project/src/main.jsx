import React from 'react'
import ReactDOM from 'react-dom/client'


// defining function to render 
function MyApp(){
   return (
      <div>
        <h1>Custom App</h1>
      </div>
   )
}
// can we use ? 
const ReactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}
// we can define element like this
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit Google</a>

)

// variable
const anotherVariable="Hello Gautam";
// actually react has its own defination of defining the react element
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  "click me to visit google",
  anotherVariable   // appending a js variable 
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // <MyApp/>    //MyApp()

  // ReactElement        --> calling it like this donot work 

  // anotherElement

  reactElement
   
)

// Conclusion: we can define our own custom render function in js
// But in react we have to follow some predefined rules.

