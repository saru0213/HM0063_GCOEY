"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import QuizPage from "./components/Exam";

const BeforeStartExam = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [exam, setExam] = useState(false);

  // Enable Full-Screen Mode
  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  useEffect(() => {
    if (!exam) return;

    const handleFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      ) {
        alert("You exited full-screen mode. The exam is now reset.");
        setExam(false);
      }
    };

    const handleTabChange = () => {
      if (document.hidden) {
        alert("You left the exam window. The exam is now reset.");
        setExam(false);
      }
    };

    const handleWindowBlur = () => {
      alert(
        "You switched tabs or minimized the window. The exam is now reset."
      );
      setExam(false);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleTabChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
      document.removeEventListener("visibilitychange", handleTabChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [exam]); // Runs only when `exam` changes

  return (
    <>
      {!exam ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Before You Start the Exam
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Please read the instructions carefully before beginning.
            </p>

            <ul className="text-left text-gray-700 text-sm mb-6 space-y-2">
              <li>✅ Ensure a stable internet connection.</li>
              <li>✅ Do not refresh the page after starting.</li>
              <li>✅ The timer will start once you begin.</li>
              <li>✅ You cannot exit or switch tabs.</li>
            </ul>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                  Start Exam
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>Are you ready to begin?</AlertDialogHeader>
                <AlertDialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button
                    onClick={() => {
                      enterFullScreen();
                      setExam(true);
                    }}
                    className="bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Yes, Start Now
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ) : (
        <QuizPage />
      )}
    </>
  );
};

export default BeforeStartExam;
