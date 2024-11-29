"use client"
import Image from "next/image";
import { useRef } from "react";
import useCountdown from "./components/Timer";
import Link from "next/link";

export default function Home() {
  const targetDate = new Date("2024-12-03T20:00:00");
  const revealDate = new Date("2024-12-03T21:00:00");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [revealDays, revealHours, revealMinutes, revealSeconds] = useCountdown(revealDate);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const screenTwoElement = document.getElementById("screentwo");
    if (screenTwoElement) {
      screenTwoElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isRevealed = revealDays <= 0 && revealHours <= 0 && revealMinutes <= 0 && revealSeconds <= 0;

  return (
    <div className="relative w-screen h-screen bg-white overflow-y-scroll overflow-x-hidden">
      <div className="background">

      </div>
      <div className="h-screen flex flex-col justify-center items-center bg-black">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <h1 className="text-white text-6xl pt-10 text-center">Gabe and Adnan's Prom</h1>
        <h1 className="text-white text-3xl pt-5 text-center">Starts in {days}d {hours}h {minutes}m {seconds}s</h1>
        <a href="/prom.pdf" target="_" className="flex justify-center items-center text-2xl p-3 border m-5 rounded-lg animatedButton">Access Ticket</a>
        <div className="flex justify-center items-center text-2xl p-3 border rounded-lg" onClick={scrollToBottom}>View Schedule</div>

      </div>
      <div id="screentwo" className="h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center border rounded-lg text-white text-4xl text-center p-5 flex-col justify-center items-center" style={{width: "90%", height:"90%"}}>

          <h1 style={{ marginBottom: "1rem" }}>Dinner at The Republic at 8:15 PM</h1>
          {isRevealed ? (
              <>
                <h1 style={{ marginBottom: "1rem" }}>Boba with Beautiful</h1>
                <h1 style={{ marginBottom: "1rem" }}>Dancing under the Stars</h1>
              </>
            ) : (
              <>
               <h1 style={{marginTop:"rem"}}>------</h1>

               <h1 style={{marginTop:"rem"}}>Everything else will be revelaed on the day of!</h1>
              </>

            )}

        </div>
      </div>
    </div>
  );
}