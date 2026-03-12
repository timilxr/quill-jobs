import React from 'react'
import { useLoaderData } from 'react-router-dom'
import type { IJob } from '../util/models';

const JobPage = () => {
    const job: IJob = useLoaderData();

    return (
        <div><h1>{job?.title}</h1></div>
    )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPage as default, jobLoader}