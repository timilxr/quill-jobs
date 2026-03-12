import React, { useEffect, useState } from 'react'
import JobListing from './JobListing'
import type { IJob } from '../util/models';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }: { isHome?: boolean }) => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchJobs = async () => {
            const url = `/api/jobs${isHome ? '?_per_page=3&_page=1' : ''}`;
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJobs(isHome ? data?.data : data);
            } catch (error) {
                console.error('Error fetching Jobs', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, [])
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent" : "Browse"} Jobs
                </h2>
                {
                    loading ?
                        <Spinner loading={loading} />
                        :
                        (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* <!-- Job Listing 1 --> */}
                            {jobs.map(job => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>)
                }
            </div>
        </section>
    )
}

export default JobListings