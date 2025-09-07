"use client";

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useState, useCallback } from "react";
import { Button } from "./components/DemoComponents";
import Bookings from "./components/Bookings";
import Profile from "./components/Profile";
import Community from "./components/Community";

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings");

  // Persisted state for appointments stored as JSON
  const [appointments, setAppointments] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("appointments.json");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Persisted state for chat messages stored as JSON
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("messages.json");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const addFrame = useAddFrame();
  const openUrl = useOpenUrl();

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  const saveFrameButton = useCallback(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
        >
          Save Frame
        </Button>
      );
    }
    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <span>Saved</span>
        </div>
      );
    }
    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 text-pink-900">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 py-10 rounded-3xl shadow-2xl bg-white/95 backdrop-blur-lg">
        <header className="flex justify-between items-center mb-8 h-14 border-b border-pink-300">
          <div>
            <div className="flex items-center space-x-4">
              <Wallet className="z-10">
                <ConnectWallet>
                  <Name className="text-pink-900 font-semibold" />
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-6 pt-4 pb-3" hasCopyAddressOnClick>
                    <Avatar />
                    <Name className="text-pink-900 font-semibold" />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton()}</div>
        </header>

        <nav className="flex flex-wrap justify-center mb-8 space-x-4 sm:space-x-8">
          <Button
            variant={activeTab === "bookings" ? "primary" : "ghost"}
            onClick={() => setActiveTab("bookings")}
            className="rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors duration-300 hover:bg-pink-300"
          >
            Book Appointment
          </Button>
          <Button
            variant={activeTab === "profile" ? "primary" : "ghost"}
            onClick={() => setActiveTab("profile")}
            className="rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors duration-300 hover:bg-pink-300"
          >
            Profile
          </Button>
          <Button
            variant={activeTab === "community" ? "primary" : "ghost"}
            onClick={() => setActiveTab("community")}
            className="rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-colors duration-300 hover:bg-pink-300"
          >
            Community
          </Button>
        </nav>

        <main className="flex-1 rounded-3xl p-8 bg-pink-50 shadow-lg">
          {activeTab === "bookings" && (
            <Bookings
              appointments={appointments}
              setAppointments={setAppointments}
            />
          )}
          {activeTab === "profile" && <Profile />}
          {activeTab === "community" && (
            <Community messages={messages} setMessages={setMessages} />
          )}
        </main>

        <footer className="mt-6 pt-8 flex justify-center border-t border-pink-300">
          <Button
            variant="ghost"
            size="sm"
            className="text-pink-700 text-xs hover:text-pink-900 transition-colors"
            onClick={() => openUrl("https://base.org/builders/minikit")}
          >
            Built on Base with MiniKit
          </Button>
        </footer>
      </div>
    </div>
  );
}
