// This is a client component
"use client";
// Import necessary components and functions
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import Modal from "../../Common/Modal";

// Define the interface for a known-for item
interface KnownForItem {
  overview: string;
}
// Define the interface for an actor
interface Actors {
  id: number;
  name: string;
  profile_path: string;
  known_for: KnownForItem[];
}

interface Props {
  actors: Actors[];
  visibleActors: Actors[];
}
// Create a functional component named `Partners
const PartnerProfile = ({ actors, visibleActors }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true); // Set modal open state to true
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set modal open state to false
  };

  return (
    <>
      <div className="flex justify-between mt-10 flex-wrap">
        {visibleActors.map((actor) => (
          <ProfileCard
            key={actor.id}
            imageUrl={actor.profile_path}
            name={actor.name}
            knownFor={actor.known_for[0].overview}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className=" bg-white text-blazingRed border-2 border-blazingRed py-2 px-6   hover:bg-blazingRed hover:text-white hover hover:border-2 hover:border-white rounded-full text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          See other partners
        </button>
      </div>
      <Modal title="All Partners" isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-wrap m-5">
          {actors.map((actor) => (
            <ProfileCard
              key={actor.id}
              imageUrl={actor.profile_path}
              name={actor.name}
              knownFor={actor.known_for[0].overview}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default PartnerProfile;
