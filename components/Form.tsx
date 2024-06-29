import calls from '../data/calls.json'
import tickets from '../data/tickets.json'
import React, { useState } from 'react';

const MyForm = ({ isTicket, setShowModal, setData }: any) => {
    const [formData, setFormData] = useState({
        sujet: '',
        heure: '',
        clientOrDuree: '',
        details: ''
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    const covertData = (array: any) => {
        const data_map = array.map((item: any, key: number) => {
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
        return data_map;
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (isTicket) {
            tickets.data.unshift({
                    "id": calls.data.length + 1,
                    "subject": formData.sujet,
                    "duree": formData.clientOrDuree,
                    "details": formData.details,
                    "start_time": formData.heure
                })
            const data_map = covertData(tickets.data)
            console.log('data_map', data_map)
            setData(data_map)
        }
        else {
            calls.data.unshift({
                "id": calls.data.length + 1,
                "subject": formData.sujet,
                "duree": formData.clientOrDuree,
                "details": formData.details,
                "start_time": formData.heure
            })
            const data_map = covertData(calls.data)
            setData(data_map)

        }
        setShowModal(false)
    };

    return (
        <div className="w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sujet">
                        Sujet
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="sujet"
                        type="text"
                        placeholder="Sujet"
                        value={formData.sujet}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heure">
                        Heure de {isTicket ? "creation" : "debut"}
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="heure"
                        type="text"
                        placeholder="--:--"
                        value={formData.heure}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientOrDuree">
                        {isTicket ? "Nom de client" : "Duree"}
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="clientOrDuree"
                        type="text"
                        placeholder={isTicket ? "Nom de client" : "Duree"}
                        value={formData.clientOrDuree}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
                        Details
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-24"
                        id="details"
                        placeholder="Details"
                        value={formData.details}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button type="button" onClick={() => setShowModal(false)} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        ignore
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        cree
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyForm;
