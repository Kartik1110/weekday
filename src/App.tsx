import './App.css'
import JobCard from "./components/JobCard"

function App() {
  return (
    <div className='main-layout'>
      <div className='card-layout'>
        {new Array(10).fill(0).map((_, index) => (
          <div key={index}>
            <JobCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
