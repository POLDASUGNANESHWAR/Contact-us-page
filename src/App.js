import { useState } from "react"
import './App.css'



function App() {
const [formData, setformData] = useState({
  name: "",
  message: "",
  email: ""
});

const [submitted, setSubmitted] = useState(false);

const handlesubmit = (event) => {
  const {name,value} = event.target
  setformData({...formData,[name]: value})
}

const submit = (event) => {
  event.preventDefault()
  setSubmitted(true)
}

return(
  <div className="form-container">
    <h1 >Contact US</h1>
    <form onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handlesubmit}
        required
        />
      </div>
      <div  className="form-group"> 
        <label htmlFor="message">Message:</label>
        <input 
        type="message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handlesubmit}
        required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handlesubmit}
        required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    {submitted && (
      <p className="successMessage">Thank you! your message has been sent.</p>
    )}
  </div>
)

}
export default App