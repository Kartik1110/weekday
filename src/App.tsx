import './App.css'
import JobCard from "./components/JobCard"

function App() {
  return (
    <div className='main-layout'>
      <div className='card-layout'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  )
}

export default App
