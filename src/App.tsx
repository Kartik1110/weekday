import { useState, useEffect, useCallback } from 'react';
import './App.css';
import JobCard from "./components/JobCard";
import MultiSelect from './components/MultiSelect';
import { fetchData } from './services/jobs.service';
import { JdListResponse } from './interfaces';
import Loader from './components/Loader';

function App() {
  const [jobData, setJobData] = useState<JdListResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const limit = 25;

  /**
   * Fetches more data asynchronously.
   * @returns {Promise<void>} A Promise that resolves when the data fetching is complete.
   */
  const fetchMoreData = useCallback(async () => {
    setIsLoading(true);
    const newData = await fetchData(limit, offset);
    setJobData((prevData) => ({
      ...prevData!,
      jdList: [...(prevData?.jdList || []), ...newData.jdList],
    }));
    setOffset((prevOffset) => prevOffset + limit);
    setIsLoading(false);
    setHasMore(newData.jdList.length > 0);
  }, [offset, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
        fetchMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMoreData, isLoading, hasMore]);

  useEffect(() => {
    if (!jobData?.jdList) {
      fetchMoreData();
    }
  }, [jobData, fetchMoreData]);

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
      {jobData ? (
        <div className='main-layout'>
          <div className='card-layout'>
            {jobData?.jdList.map((data) => (
              <div key={data.jdUid}>
                <JobCard jobData={data} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
