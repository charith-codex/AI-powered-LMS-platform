import Image from "next/image";
import { useState } from "react";

export const SelectOptions = ({ selectedStudyType }: any) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const Options = [
    { name: "Exam", icon: "/exam_1.png" },
    { name: "Job Interview", icon: "/job.png" },
    { name: "Practice", icon: "/practice.png" },
    { name: "Coding Pro", icon: "/code.png" },
    { name: "Other", icon: "/knowledge.png" },
  ];

  return (
    <div>
      <h2 className="text-center mb-2 text-lg">
        For Which you want to create your personal study material?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {Options.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 border rounded-xl hover:border-primary cursor-pointer ${
              option?.name === selectedOption && "border-primary"
            }`}
            onClick={() => {
              setSelectedOption(option.name);
              selectedStudyType(option.name);
            }}
          >
            <Image src={option.icon} alt={option.name} width={50} height={50} />
            <h2 className="text-sm mt-2">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
