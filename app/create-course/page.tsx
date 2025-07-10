"use client";

import { useState } from "react";
import { SelectOptions } from "./_components/SelectOptions";
import { Button } from "@/components/ui/button";
import { TopicInput } from "./_components/TopicInput";
import { CloudHail } from "lucide-react";

export default function CreateCourse() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState([]);

  const handleUserInput = (fieldName: string, fieldValue: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));

    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center p-5 md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-primary">
        Start Building Your Personal Study Material
      </h2>
      <p className="text-slate-600 text-lg">
        Fill the details in order to generate study material for you
      </p>

      <div className="mt-10">
        {step === 0 ? (
          <SelectOptions
            selectedStudyType={(value: string) =>
              handleUserInput("studyType", value)
            }
          />
        ) : (
          <TopicInput
            setTopic={(value: string) => handleUserInput("topic", value)}
            setDifficultyLevel={(value: string) =>
              handleUserInput("difficultyLevel", value)
            }
          />
        )}
      </div>

      <div className="flex justify-between w-full mt-32">
        {step !== 0 ? (
          <Button
            onClick={() => setStep(step - 1)}
            variant="outline"
            className="w-[100px]"
          >
            Previous
          </Button>
        ) : (
          <Button variant="outline" disabled className="w-[100px]">
            Previous
          </Button>
        )}
        {step === 0 ? (
          <Button onClick={() => setStep(step + 1)} className="w-[100px]">
            Next
          </Button>
        ) : (
          <Button className="w-[100px]">Generate</Button>
        )}
      </div>
    </div>
  );
}
