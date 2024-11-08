import React, { useState } from 'react';

interface StepProps {
  onNextStep: (stepData: any) => void;
}

export default function Step4({ onNextStep }: StepProps) {
  const [themes, setThemes] = useState<number>(1);
  const [ThemeName, setThemeName] = useState<{ name: string }[]>([
    { name: '' },
  ]);

  // Оновлення кількості раундів
  const handleThemesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newThemes = Math.min(Math.max(Number(e.target.value), 1), 10);
    setThemes(newThemes);

    // Оновлюємо масив з даними раундів відповідно до нової кількості
    if (newThemes > ThemeName.length) {
      setThemeName([...ThemeName, ...Array(newThemes - ThemeName.length).fill({ name: '' })]);
    } else {
      setThemeName(ThemeName.slice(0, newThemes));
    }
  };

  // Оновлення назви раунду
  const handleThemeNameChange = (index: number, newName: string) => {
    const updatedThemeData = [...ThemeName];
    updatedThemeData[index].name = newName;
    setThemeName(updatedThemeData);
  };

  // Додавання нового раунду
  const addTheme = () => {
    if (themes < 10) {
      setThemes(themes + 1);
      setThemeName([...ThemeName, { name: '' }]);
    }
  };

  // Сабміт форми
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ themes: themes, ThemeName: ThemeName })
    onNextStep({ themes: themes, ThemeName: ThemeName }); // Передаємо дані про кількість раундів і їх назви
  };

  return (
    <form onSubmit={handleSubmit}>
      {ThemeName.map((round, index) => (
        <div key={index}>
          <label htmlFor={`theme-${index}`}>Theme {index + 1} Name:</label>
          <input
            type="text"
            id={`theme-${index}`}
            value={round.name}
            onChange={(e) => handleThemeNameChange(index, e.target.value)}
            required
          />
        </div>
      ))}

      <button type="button" onClick={addTheme} disabled={themes >= 10}>
        Add Theme
      </button>

      <button type="submit">Next</button>
    </form>
  );
}
