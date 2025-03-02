import React, { useEffect, useState } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { handleSpeak, handleStop } from "@/app/components/Speach";
import useSpeechToText from "react-hook-speech-to-text";
import { AiGeneratePoints } from "../../../../../config/AllAiModels";

function LetStart({ start, text, header, setStart }) {
  const [state, setState] = useState(0);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [speak, setSpeak] = useState(1);
  const [hide, setHide] = useState({
    listening: false,
    speaking: false,
    repeating: false,
  });
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    if (results.length > 0) {
      const newAnswer = results.map((result) => result.transcript).join(" ");
      setUserAnswer((prevAnswer) => prevAnswer + " " + newAnswer);
      setResults([]);
    }
  }, [results, setResults]);

  const handleWriting = async () => {
    setLoading(true);
    const prompt = `Read the following paragraph and extract its main points in the form of concise bullet points. Summarize key ideas, arguments,
    or critical details while keeping the language short, simple and precise.in json formate.Paragraph: ${text}`;
    try {
      const result = await AiGeneratePoints.sendMessage(prompt);
      const responseText = await result.response.text();
      console.log(responseText);
      const jsonreponse = JSON.parse(responseText);
      setSummary(jsonreponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AlertDialog open={start}>
        <AlertDialogContent className="w-[420px] md:w-full md:max-w-3xl">
          <div className="">
            <p className="font-bold ">{header || "Let's Start"}</p>
            {state !== 3 && (
              <p className="mt-2 text-justify">
                {text ||
                  "Click the button below to start the course WEFFHOi fWEF FJSADJFLKAJS Kjslfdls fasldf asdlfnsald fkasdlfna sffsfl asdl fsdjfl aksdjfsajldf alsdjfl adsjl."}
              </p>
            )}

            {state === 1 ? (
              <div className="mt-5 p-2 border m-2">
                <ul>
                  {results.map((result) => (
                    <li
                      key={result.timestamp}
                      className="text-gray-600 text-justify"
                    >
                      {result.transcript}
                    </li>
                  ))}
                  {interimResult && <li>{interimResult}</li>}
                </ul>
                <p>{userAnswer}</p>
              </div>
            ) : null}
            {state === 2 && (
              <div className="mt-5 border m-2 p-2">
                {summary && (
                  <div>
                    {summary?.mainPoints?.map((point, index) => (
                      <p key={index}>
                        {index + 1}.{point}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* {state === 3 && (
              <div>
                <p className="text-lg font-bold">Your Summary</p>
                <div className="mt-5 border m-2 p-2 h-24">
                  <ul>
                    {results.map((result) => (
                      <li
                        key={result.timestamp}
                        className="text-gray-600 text-justify"
                      >
                        {result.transcript}
                      </li>
                    ))}
                    {interimResult && <li>{interimResult}</li>}
                  </ul>
                  <p>{userAnswer}</p>
                </div>
              </div>
            )} */}

            <div className="flex justify-between mt-5">
              {/* {!show ? ( */}
              {state === 0 && (
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => {
                    !hide.listening
                      ? (setHide((pre) => ({ ...pre, listening: true })),
                        handleSpeak(text),
                        setSpeak(2))
                      : (handleStop(),
                        setHide((pre) => ({ ...pre, listening: false })));
                  }}
                >
                  {!hide.listening ? "Start Listening" : "Stop Listening"}
                </Button>
              )}
              {state === 1 && (
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => {
                    !hide.speaking
                      ? (setHide((pre) => ({ ...pre, speaking: true })),
                        startSpeechToText(text),
                        setSpeak(2))
                      : (setHide((pre) => ({ ...pre, speaking: false })),
                        stopSpeechToText);
                  }}
                >
                  {!hide.speaking ? "Start Speaking" : "Stop Speaking"}
                </Button>
              )}
              {state === 2 && (
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => {
                    setSpeak(2);
                    handleWriting(text);
                  }}
                  disabled={loading || summary}
                >
                  {loading ? "Loading..." : "Points to Write"}
                </Button>
              )}
              {/* {state === 3 && (
                <Button
                  className="bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => {
                    !hide.speaking
                      ? (setHide((pre) => ({ ...pre, speaking: true })),
                        startSpeechToText(text),
                        setSpeak(2))
                      : (setHide((pre) => ({ ...pre, speaking: false })),
                        stopSpeechToText);
                  }}
                >
                  {!hide.speaking ? "Speak you Remember" : "Stop Speaking"}
                </Button>
              )} */}

              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setState((pre) => pre - 1);
                    setUserAnswer("");
                  }}
                  disabled={state === 0 || loading}
                >
                  Prev Practice
                </Button>
                {state !== 2 ? (
                  <Button
                    onClick={() => {
                      setState((pre) => pre + 1);
                      setUserAnswer("");
                      setSpeak(1);
                    }}
                    disabled={state === 2 || loading || speak == 1}
                  >
                    Next Practice
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setStart(false);
                      setState(0);
                    }}
                    disabled={!results || speak === 1}
                  >
                    Completed
                  </Button>
                )}
              </div>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default LetStart;
