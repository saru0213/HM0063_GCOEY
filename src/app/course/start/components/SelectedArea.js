import React, { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { AiTraslator } from "../../../../../config/AllAiModels";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const SelectionPage = () => {
  const [selection, setSelection] = useState("");
  const [tra, setTra] = useState("");

  const handleSelection = () => {
    const selectionObj = window.getSelection();
    if (selectionObj && selectionObj.rangeCount > 0) {
      const selectedText = selectionObj.toString();
      setSelection(selectedText);
      if (selectedText) {
        console.log("Selected Text:", selectedText);
      }
    } else {
      setSelection("");
    }
  };

  const handleTranslate = async () => {
    const language = "marathi";
    const prompt = `"Translate the following text from English to ${language}: ${selection}.in json formate.`;
    try {
      const result = await AiTraslator.sendMessage(prompt);
      const responseText = await result.response.text();
      console.log(responseText);
      const json = JSON.parse(responseText);
      setTra(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div
            onMouseUp={() => {
              handleSelection();
            }}
            className="p-6"
          >
            <HoverCard>
              <HoverCardTrigger>
                <h1 className="text-xl font-bold mb-4">
                  Text Selection Example
                </h1>
                <p className="text-base">
                  This is an example paragraph. You can select any part of this
                  text, and it will be logged in the console. Try selecting a
                  word or phrase, and check your browser's developer console to
                  see the selected text.
                </p>
              </HoverCardTrigger>
              {tra.marathi && (
                <HoverCardContent>{tra.marathi}</HoverCardContent>
              )}
            </HoverCard>
          </div>
        </ContextMenuTrigger>
        {selection && (
          <ContextMenuContent>
            <ContextMenuItem
              onClick={() => {
                handleTranslate();
              }}
            >
              Translate
            </ContextMenuItem>
            <ContextMenuItem>Know More</ContextMenuItem>
          </ContextMenuContent>
        )}
      </ContextMenu>
    </>
  );
};

export default SelectionPage;
