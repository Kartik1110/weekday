import './App.css'
import JobCard from "./components/JobCard"
import MultiSelect from './components/MultiSelect'

function App() {
  return (
    <div>

      <div className='app-layout'>
        <MultiSelect label='Role' />
        <MultiSelect label='Experience' />
        <MultiSelect label='Tech Stack'/>
      </div>
      <div className='main-layout'>
        <div className='card-layout'>
          {new Array(10).fill(0).map((_, index) => (
            <div key={index}>
              <JobCard />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
