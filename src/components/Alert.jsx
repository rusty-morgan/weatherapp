import React from "react";

export default function Alert({ alerts }) {
  return (
    <div className="w-full p-3 bg-orange-400 text-white rounded-md">
      <div>
        <h3 className="first-letter:capitalize text-md font-bold mb-2">
          {alerts[0].event}
        </h3>
      </div>

      <p className="text-sm">{alerts[0].description}</p>
      <p className="text-xs font-extralight mt-3">
        Source: {alerts[0].sender_name}
      </p>
    </div>
  );
}
