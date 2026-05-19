import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import type { JobFormData } from './util/models';
import { jobLoader } from './util/loaders';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  const addJob = async (job: JobFormData) => {
    try {
      await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      });
    } catch (error) {
      console.error('Error adding job', error);
    }
  }
  
  const editJob = async (job: JobFormData) => {
    try {
      await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
      });
    } catch (error) {
      console.error('Error editing job', error);
    }
  }
  
  const deleteJob = async (jobId: string) => {
    try {
      await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error deleting job', error);
    }
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-job' element={<AddJobPage addJob={addJob} />} />
      <Route path='/edit-job/:id' loader={jobLoader} element={<EditJobPage editJob={editJob} />} />
      <Route path='/jobs/:id' loader={jobLoader} element={<JobPage deleteJob={deleteJob} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ));

  return (<RouterProvider router={router} />
  )
}

export default App