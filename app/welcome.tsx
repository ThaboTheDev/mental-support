import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

export default function Welcome() {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const handleConnect = () => {
    open();
  };

  React.useEffect(() => {
    if (isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 p-6">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">
        Welcome to Mental Support App
      </h1>
      <p className="max-w-xl text-center text-pink-800 mb-10">
        This app helps you manage your mental health by providing community
        support, booking sessions, and tracking your progress. Please connect
        your wallet to get started.
      </p>
      <button
        onClick={handleConnect}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
      >
        Connect Wallet
      </button>
    </div>
  );
}
