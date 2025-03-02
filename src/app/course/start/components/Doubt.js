import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { AiDoubtSuggestion } from "../../../../../config/AllAiModels";
import { Button } from "@/components/ui/button";

function Doubt({ doubt, setSolve, setDoubt }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDoubt = async () => {
    setLoading(true);
    const prompt = `give me detailed and clear explanation of my doubt given below. include Acknowledge, clear explanation, example, simplified summary, further classification, encouragement to student, root cause of doubt.in json formate .doubt description:${question}`;
    try {
      const result = await AiDoubtSuggestion.sendMessage(prompt);
      const text = await result.response.text();
      const json = JSON.parse(text);
      console.log(json);
      setSolve(json);
      setDoubt(false);
      setQuestion("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AlertDialog open={doubt}>
        <AlertDialogContent className="w-[420px] md:w-full md:max-w-3xl">
          <p>Do You Have Any Doubt?</p>
          <Textarea
            placeholder="Describe your Doubt"
            className="w-full"
            rows={5}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button
            onClick={() => {
              handleDoubt();
            }}
            diasable={loading}
          >
            {loading ? "Loading..." : "Solve It"}
          </Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Doubt;
