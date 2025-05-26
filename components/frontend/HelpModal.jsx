"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1 text-green-950 dark:text-slate-50"
      >
        <HelpCircle />
        <span>Help</span>
      </button>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Need Help, talk to our help desk</ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-2 gap-8">
            <Link
              href="tel:0909988334"
              className="flex items-center space-x-2 text-slate-900 dark:text-slate-50"
            >
              <div className="flex items-center w-10 h-10 justify-center rounded-full bg-lime-100">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span>Call: 09098899833</span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-slate-900 dark:text-slate-50"
            >
              <div className="flex items-center w-10 h-10 justify-center rounded-full bg-lime-100">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span>Track your orders</span>
            </Link>
            <Link
              href="/returns"
              className="flex items-center space-x-2 text-slate-900 dark:text-slate-50"
            >
              <div className="flex items-center w-10 h-10 justify-center rounded-full bg-lime-100">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span>Returns and Refunds </span>
            </Link>
            <Link
              href="/payment"
              className="flex items-center space-x-2 text-slate-900 dark:text-slate-50"
            >
              <div className="flex items-center w-10 h-10 justify-center rounded-full bg-lime-100">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span>Chat with us </span>
            </Link>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
