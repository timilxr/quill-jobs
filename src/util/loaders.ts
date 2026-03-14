import type { LoaderFunctionArgs } from "react-router-dom";

const jobLoader = async ({ params }: LoaderFunctionArgs<{id: string}>) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { jobLoader };