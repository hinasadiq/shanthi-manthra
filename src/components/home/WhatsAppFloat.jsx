import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phoneNumber = "919847532978"; // Your WhatsApp number (with country code, no +)
  const message = "Hello, I want to enquire about yoga classes.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500
        shadow-lg hover:bg-green-600
        transition duration-300
      "
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}
