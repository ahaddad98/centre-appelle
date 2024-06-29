import Table from "@/components/Table";
import React from "react";
import { getTickets } from '../../ApiNetwork/apiNetwork'

const Tickets = async () => {
    const data = await getTickets();
    const header_table = ['sujet', 'heure de creation', 'details', 'nom de client']
    return <>
         <h1 className="text-center text-5xl">Tickets</h1>
        <Table header={header_table} data={data?.tickets} isTicket={true}/>
    </>
}
export default Tickets