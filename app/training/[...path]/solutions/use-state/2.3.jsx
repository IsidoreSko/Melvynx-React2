"use client";

import { useState } from "react";

const NameForm = ({ initialName }) => {
  const [name, setName] = useState(initialName);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name :</h2>
          {name ? <p>{name}</p> : <p className="text-error">No name</p>}
          {name ? (
            <button
              className="btn btn-warning btn-sm"
              onClick={() => {
                setName("");
              }}
            >
              Reset
            </button>
          ) : null}
        </div>
      </div>
      <div className="divider">Form</div>
      <label className="input input-bordered flex items-center gap-2">
        Name
        <input
          type="text"
          className="grow"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col gap-8">
      <NameForm initialName={"Jean"} />
    </div>
  );
}
