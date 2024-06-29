"use client"
import React from "react";
import FormCreate from "./Form";

export default function Modal({showModal, setShowModal, isTicket, setData}: any) {
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative mx-auto max-w-3xl w-full">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <FormCreate showModal={showModal} setShowModal={setShowModal} isTicket={isTicket} setData={setData}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}