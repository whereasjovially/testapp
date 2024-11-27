"use client";

import { useMemo, useState } from "react";
import { isAddress } from "web3-validator";

export default function Page() {
  const [address, setAddress] = useState<string>("");
  const [validity, setValidity] = useState<boolean>(false);

  useMemo(() => {
    setValidity(isAddress(address));
  }, [address]);

  return (
    <div className="flex justify-center">
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Input an address to check its validity."
          className="w-[400px] px-4 py-1"
        />
        <p>
          {validity ? (
            <p className="text-green-900">Valid</p>
          ) : (
            <p className=" text-red-900">Invalid</p>
          )}
        </p>
      </div>
    </div>
  );
}
