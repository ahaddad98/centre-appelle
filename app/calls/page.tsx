import Table from "@/components/Table";
import React from "react";
import { getCalls } from '../../ApiNetwork/apiNetwork'

const Calls = async () => {
    const data = await getCalls();
    const header_table = ['sujet', 'heure de debut', 'details', 'duree']
    return <>
        <h1 className="text-center text-5xl">Calls</h1>
        <Table header={header_table} data={data?.calls} isTicket={false}/>
    </>
}

export default Calls