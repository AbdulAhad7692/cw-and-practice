import "./App.css"
import { Button, Header } from "./components/component"



function Footer() {
  return (
    <div>
      <h1>
        Footer
      </h1>
    </div>
  )
}
const foo = () => {
  console.log("hello")
}
const arguements = (a) => {
  console.log(a)
}



function App() {
  let fullName = 'Abdul Ahad'

  const arr = ['one', 'two', 'three']
  for (var i = 1; i < 6; i++) {
    console.log(i)
  }

  return (
    <div>
      {arr}
      {i}




      <Header />
      <Button />
      <button onClick={foo}>Click here for hehe</button>
      {/* //passing arguements// */}
      <button onClick={() => arguements('arguement passed congrats')}>arguement passed</button>
      <h1>{fullName}</h1>
      <h1 className="text">Hello world</h1>
      <h1>hacker</h1>
      <h1>hacker hun bhai hacker</h1>
      <Footer />
    </div>
  )
}
export default App
