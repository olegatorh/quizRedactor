import React from "react";
import {useQuizPage} from "@/app/services/QuizContext";

export default function QuizVisualisation() {
    const { quizData } = useQuizPage();

    return (
        <div style={{width: '50%', border: '1px solid #ccc', padding: '20px'}}>
            <h2>Quiz Data Visualization</h2>
            <pre>{JSON.stringify(quizData, null, 2)}</pre>
        </div>
    )
}