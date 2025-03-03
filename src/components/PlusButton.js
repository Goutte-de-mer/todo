"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { useState } from "react";

const PlusButton = ({ addTask }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        id="open-form"
        className="mt-auto ml-5 h-7 w-7 cursor-pointer rounded-full bg-white transition-colors hover:text-(--secondary)"
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {showModal && <Modal showModal={setShowModal} addTask={addTask} />}
    </>
  );
};

export default PlusButton;
