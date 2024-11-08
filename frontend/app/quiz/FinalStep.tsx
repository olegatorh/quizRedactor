interface FinalStepProps {
  onSubmitQuiz: () => void;
}

export default function FinalStep({ onSubmitQuiz }: FinalStepProps) {
  return (
    <div>
      <h2>Review Your Quiz</h2>
      <p>Please review your quiz data. When you are ready, submit it.</p>
      <button onClick={onSubmitQuiz}>Submit Quiz</button>
    </div>
  );
}
