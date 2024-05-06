import { useState, useEffect } from 'react'
import './App.css'
import JobCard from "./components/JobCard"
import MultiSelect from './components/MultiSelect'
import { fetchData } from './services/jobs.service'
import { JdListResponse } from './interfaces'

function App() {
  const [jobData, setJobData] = useState<JdListResponse>()

  useEffect(() => {
    fetchData().then((data) => {
      console.log("🚀 ~ fetchData ~ data:", data)

      setJobData(data)
    })
  }, [])

  return (
    <div>

      <div className='app-layout'>
        <MultiSelect label='Role' />
        <MultiSelect label='Experience' />
        <MultiSelect label='Tech Stack' />
        <MultiSelect label='Role' />
        <MultiSelect label='Experience' />
        <MultiSelect label='Tech Stack' />
      </div>
      <div className='main-layout'>
        <div className='card-layout'>
          {jobData?.jdList.map((data) => (
            <div key={data.jdUid}>
              <JobCard jobData={data} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
