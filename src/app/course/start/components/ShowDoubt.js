import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function ShowDoubt({ solve, setSolve }) {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="border-b bg-white/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">
                Here is the doubt solution
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <p className="text-gray-700">{solve?.doubtDescription}</p>
              <p className="text-gray-700">{solve?.acknowledgement}</p>
              <p className="text-gray-700">
                <span className="font-semibold">Explan:</span>
                {solve?.explanation}
              </p>

              <p className="text-gray-700">
                <span className="font-semibold">Example:</span> {solve?.example}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Simplified Summary:</span>
                {solve?.simplifiedSummary}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Further Classification:</span>
                {solve?.furtherClassification}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Root Cause Of Doubt:</span>
                {solve?.rootCauseOfDoubt}
              </p>
              <p className="text-gray-700">{solve?.encouragementToStudent}</p>
            </div>
            <div className="flex justify-end gap-5 mt-5">
              <Button
                onClick={() => {
                  setSolve("");
                }}
              >
                Doubt Solved
              </Button>
              {/* <Button>Not Solved</Button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ShowDoubt;
