export interface IJob {
    id: string;
    title: string;
    description: string;
    type: string;
    salary: string;
    location: string;
    company: {
        name: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    }
}

export type JobFormData = Partial<Omit<IJob, 'company'>> & { company?: Partial<IJob['company']> };