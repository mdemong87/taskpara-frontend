'use client'

import SinglePageWper from "@/componnent/SinglepageWrpwer";
import { QueryClient, QueryClientProvider } from "react-query";


function SingleItem(props) {

    const client = new QueryClient();
    const { id } = props.params;

    return (
        <QueryClientProvider client={client}>
            <SinglePageWper id={id} />
        </QueryClientProvider>
    )
}


export default SingleItem;