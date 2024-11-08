import React, { useState } from 'react';

interface StepProps {
  onNextStep: (stepData: any) => void;
}

export default function Step3({ onNextStep }: StepProps) {
  const [rounds, setRounds] = useState<number>(1);
  const [roundData, setRoundData] = useState<{ name: string }[]>([
    { name: '' },
  ]);

  // Оновлення кількості раундів
  const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRounds = Math.min(Math.max(Number(e.target.value), 1), 10);
    setRounds(newRounds);

    // Оновлюємо масив з даними раундів відповідно до нової кількості
    if (newRounds > roundData.length) {
      setRoundData([...roundData, ...Array(newRounds - roundData.length).fill({ name: '' })]);
    } else {
      setRoundData(roundData.slice(0, newRounds));
    }
  };

  // Оновлення назви раунду
  const handleRoundNameChange = (index: number, newName: string) => {
    const updatedRoundData = [...roundData];
    updatedRoundData[index].name = newName;
    setRoundData(updatedRoundData);
  };

  // Додавання нового раунду
  const addRound = () => {
    if (rounds < 10) {
      setRounds(rounds + 1);
      setRoundData([...roundData, { name: '' }]);
    }
  };

  // Сабміт форми
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rounds, roundData })
    onNextStep({ rounds, roundData }); // Передаємо дані про кількість раундів і їх назви
  };

  return (
    <form onSubmit={handleSubmit}>
      {roundData.map((round, index) => (
        <div key={index}>
          <label htmlFor={`round-${index}`}>Round {index + 1} Name:</label>
          <input
            type="text"
            id={`round-${index}`}
            value={round.name}
            onChange={(e) => handleRoundNameChange(index, e.target.value)}
            required
          />
        </div>
      ))}

      <button type="button" onClick={addRound} disabled={rounds >= 10}>
        Add Round
      </button>

      <button type="submit">Next</button>
    </form>
  );
}
