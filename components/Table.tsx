"use client"
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useMyGlobalContext } from "@/app/stores/ContextGlobalProvider";

const Table = ({ header, data, isTicket }: any) => {
    let { calls, setCalls, Tickets, setTickets}: any = useMyGlobalContext()
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const data_map = data.map((item: any, key: number) => {
            return <tr key={key}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 text-balance">
                    {item.subject}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-balance">
                    {item.details}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-balance">
                    {item.start_time}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-balance">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    {item.duree}
                </td>
            </tr>
        })
        setTickets(data_map)
    },[])
    const header_map = header.map((item: string, key: number) => {
        return <th key={key} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            {item}
        </th>
    })
    return <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button onClick={() => setShowModal(true)} className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            {
                                isTicket ? 'Cree ticket' : 'enregister une appelle'
                            }
                        </button>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} isTicket={isTicket} setData={setTickets} />
            <div className="block w-full overflow-x-auto text-black">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            {header_map}
                        </tr>
                    </thead>
                    <tbody>
                        {Tickets}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default Table