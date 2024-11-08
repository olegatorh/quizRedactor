import React, { useState } from 'react';
import {useQuizPage} from "@/app/services/QuizContext";

interface StepProps {
  onNextStep: (stepData: any) => void;
}

export default function Step2({ onNextStep }: StepProps) {
  const [tag, setTag] = useState('');
  const { createTag, quizData } = useQuizPage();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createTag(tag);
    console.log('quizData', result)
    const stepData = {
      ...tag
    };
    onNextStep(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tag">Tag:</label>
        <input
          type="text"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}