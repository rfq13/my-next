// buatkan modal, original dari tailwind

import { useState } from "react";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  CustomContainer?: (props: { children: React.ReactNode }) => React.ReactNode;
  onOK?: () => void;
  okButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Modal({
  open,
  setOpen,
  children,
  title,
  CustomContainer,
  okButtonProps,
  onOK,
}: ModalProps) {
  const MainModal = () => (
    <div
      className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#1e1e1e] outline-none focus:outline-none"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/*header*/}
      <div className="flex items-start p-5 rounded-t">
        {title ? (
          typeof title === "string" ? (
            <h3 className="text-3xl font-semibold">{title}</h3>
          ) : (
            title
          )
        ) : null}
        <button
          className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => setOpen(false)}
        >
          <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
            {/* close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="#ffffff"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className=""
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
      {/*body*/}
      <div className="relative p-6 flex-auto">{children}</div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 rounded-b">
        <button
          className={`text-white bg-[#5c388e] font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 rounded ${okButtonProps?.className}`}
          type="button"
          onClick={() => onOK?.()}
        >
          {okButtonProps?.children || <span className="text-white">Close</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-300 ease-in-out"
            onClick={() => {
              setOpen(false);
            }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {CustomContainer ? (
                <CustomContainer>
                  <MainModal />
                </CustomContainer>
              ) : (
                <MainModal />
              )}
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
