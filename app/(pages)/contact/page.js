"use client";
import { useState } from "react";
export default function ContactPage() {
  const email = "izacpeterson@gmail.com";
  const cellNumber = "801.855.6798";

  return (
    <div className="container m-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Feel free to reach out to me via email or text:</p>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="email">
          Email
        </label>
        <p>{email}</p>
      </div>
      <div className="mb-4">
        <label className="block  font-bold mb-2" htmlFor="cellNumber">
          Phone Number
        </label>
        <p>{cellNumber}</p>
      </div>
    </div>
  );
}
