"use client";

import React, {useState} from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import FinalStep from './FinalStep';
import Step4 from "@/app/quiz/Step4";
import {QuizPageProvider, useQuizPage} from "@/app/services/QuizContext";
import QuizVisualisation from "@/app/quiz/vizualization";



export default function QuizCreator() {
    const [currentStep, setCurrentStep] = useState(1);
    // Функція для збереження введених даних і переходу до наступного кроку
    const handleNextStep = (stepData: any) => {
        setCurrentStep(currentStep + 1);
    };

    // Функція для відправлення всіх даних після завершення
    const handleSubmitQuiz = async () => {
    };

    return (
        <QuizPageProvider>
            <div style={{display: 'flex', gap: '20px'}}>
                {/* Ліва частина з поточним кроком */}
                <div style={{width: '50%'}}>
                    {currentStep === 1 && <Step1 onNextStep={handleNextStep}/>}
                    {currentStep === 2 && <Step2 onNextStep={handleNextStep}/>}
                    {currentStep === 3 && <Step3 onNextStep={handleNextStep}/>}
                    {currentStep === 4 && <Step4 onNextStep={handleNextStep}/>}
                    {currentStep > 4 && <FinalStep onSubmitQuiz={handleSubmitQuiz}/>}
                </div>
                <QuizVisualisation/>
            </div>
        </QuizPageProvider>
    );
}
