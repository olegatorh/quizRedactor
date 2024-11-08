import React, { useState } from 'react';
import {useQuizPage} from "@/app/services/QuizContext";
import { getCookie } from 'cookies-next';


interface StepProps {
  onNextStep: (stepData: any) => void;
}

export default function Step1({ onNextStep }: StepProps) {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [author, setAuthor] = useState('');
  const { createPackage, quizData } = useQuizPage();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await createPackage(title, Number(difficulty), author);
    console.log('quizData', result)
    const stepData = {
      ...result
    };
    onNextStep(stepData);
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="title">Title:</label>
              <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
              />
          </div>
          <div>
              <label htmlFor="difficulty">Difficulty:</label>
              <input
                  type="number"
                  id="difficulty"
                  min={"1"}
                  max={"10"}
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
              />
          </div>
          <div>
              <label htmlFor="Author">Author:</label>
              <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
              />
          </div>
          <button type="submit">Next</button>
      </form>
  );
}