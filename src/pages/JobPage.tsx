import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { IJob } from '../util/models';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState<IJob|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchJob = async () => {
            const url = `/api/jobs/${id}`;
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.error('Error fetching Job', error);
            } finally {
                setLoading(false);
            }
        }

        fetchJob();
    }, []);

    return loading ? <Spinner loading={loading} /> : (
        <div><h1>{job?.title}</h1></div>
    )
}

export default JobPage