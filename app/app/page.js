'use client'

import ContentSide from "@/componnent/ContentSide";
import { QueryClient, QueryClientProvider } from "react-query";

async function Application() {

    const client = new QueryClient();

    return (
        <main className="w-full bg-gray-100">
            <div className="w-full px-5">
                <QueryClientProvider client={client}>
                    <ContentSide />
                </QueryClientProvider>
            </div>
        </main>
    )
}


export default Application;