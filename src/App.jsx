import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Chatbot from './Chatbot'; // Adjust the path as needed

const events = [
  { year: "09/2023", text: "I started LinkedIn", position: "left-[5%] top-[50%]" },
  { year: "02/2024", text: "Expanding network", position: "left-[25%] top-[65%]" },
  { year: "06/2024", text: "Posting more", position: "left-[50%] top-[50%]" },
  { year: "10/2024", text: "More...😎", position: "left-[75%] top-[70%]" },
  { year: "01/2025", text: "Banned 💀", position: "left-[95%] top-[50%]" },
];

export default function LinkedInGraveyard() {
  const [bouquetCount, setBouquetCount] = useState(0);
  const [activeEvents, setActiveEvents] = useState([]);  // Array to keep track of opened events

  const handleEventClick = (index) => {
    // Add the event index to activeEvents if it's not already present
    if (!activeEvents.includes(index)) {
      setActiveEvents([...activeEvents, index]);
    }
  };

  return (
    <div className="bg-black min-h-screen text-red-500 flex flex-col items-center p-10">
      <h1 className="text-5xl font-extrabold mb-14 text-red-600">
        The <span className="text-white">LinkedIn</span> Graveyard🪦
      </h1>

      <div className="relative w-full max-w-5xl mb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="w-full h-32 flex justify-between items-center relative">
            <div className="absolute w-full h-1 bg-red-700 top-[50%]" />
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.5 }}
                className="relative flex flex-col items-center"
                onClick={() => handleEventClick(index)}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-red-800 shadow-lg relative hover:scale-125 animate-pulse transition-transform cursor-pointer" />
                {activeEvents.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-900 text-gray-200 p-4 rounded-lg shadow-xl whitespace-nowrap mt-2"
                  >
                    {event.text}
                    <div className="text-xs text-gray-400 mt-1">{event.year}</div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 2FA Importance Box */}
      <Card className="bg-gray-900 text-white p-6 border border-red-700 shadow-2xl w-4/5 mb-16 relative overflow-hidden before:absolute before:inset-0 before:bg-red-900 before:opacity-20 before:blur-lg">
        <CardContent className="text-center relative z-10">
          <motion.h2 
            className="text-3xl font-extrabold text-red-500"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ⚠️ Why You Need 2FA?
          </motion.h2>
          <p className="mt-4 text-gray-300 text-lg">
            Protect your account from digital ghosts! 👻 <br />
            Enable Two-Factor Authentication before your LinkedIn meets the same fate!<br />
            Please use the <b>Chatbot</b> for more  information.
          </p>
          <p className="mt-3 text-lg text-red-400 italic animate-pulse">
            Don't let hackers write your epitaph.
          </p>
        </CardContent>
      </Card>

      {/* Spacer to ensure gap */}
      <div className="h-16"></div>

      {/* Bouquet Offering */}
      <Card className="bg-gray-900 text-white p-8 border border-red-700 shadow-xl w-96">
        <CardContent className="flex flex-col items-center">
          <p className="mb-5 text-red-400 text-xl font-semibold text-center">
            Offer a bouquet to the fallen LinkedIn accounts
          </p>
          <div
            className="bg-gray-900 hover:bg-gray-800 text-white text-xl py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-pointer text-center flex items-center justify-center space-x-2"
            onClick={() => setBouquetCount(bouquetCount + 1)}
          >
            <span>💐</span>
            <span> Better offer a Bouquet (or else... 👀)</span>
          </div>
          <p className="mt-5 text-red-300 text-lg font-medium">Bouquets: {bouquetCount}</p>
        </CardContent>
      </Card>

      {/* Chatbot Section */}
      <div className="mt-10 w-96">
        <Chatbot />
      </div>
    </div>
  );
}
