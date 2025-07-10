import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TopicInput = ({ setTopic, setDifficultyLevel }: any) => {
  return (
    <div className="mt-5 flex flex-col w-full">
      <h2>
        Enter topic or paster the content for which you want to generate study
        material
      </h2>
      <Textarea
        placeholder="start writing here"
        className="mt-2 w-full"
        onChange={(e) => setTopic(e.target.value)}
      />

      <h2 className="mt-5 mb-2">Select the difficulty level</h2>
      <Select onValueChange={(value) => setDifficultyLevel(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Difficulty Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="moderate">moderate</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
