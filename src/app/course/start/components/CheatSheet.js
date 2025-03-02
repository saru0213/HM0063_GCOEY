import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CheatSheet = ({ cheatSheet }) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="w-full bg-blue-50 border-blue-200">
        <CardHeader className="bg-blue-100 border-b border-blue-200">
          <CardTitle className="text-2xl font-bold text-blue-800">
            {cheatSheet.chapter}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {cheatSheet.sections.map((section, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-b border-blue-100"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 text-blue-900 font-semibold">
                  {section.heading}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  <div className="space-y-4">
                    <p className="text-gray-700">{section.explanation}</p>

                    {section.code && (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{section.code}</code>
                      </pre>
                    )}

                    {section.tips && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-md">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Tips:
                        </h4>
                        <ul className="list-disc list-inside text-blue-700">
                          {section.tips.map((tip, tipIndex) => (
                            <li key={tipIndex}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheatSheet;
