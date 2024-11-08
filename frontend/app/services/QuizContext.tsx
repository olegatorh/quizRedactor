import React, {createContext, ReactNode, useContext, useState} from 'react';
import {fetchPackageInfo, postPackageInfo, postTagInfo} from "@/app/services/quizAPI";

interface QuizPageContextProps {
  quizData: any;
  createPackage: (name: string, difficulty: number, author: string) => Promise<void>;
  createTag: (tag: string) => Promise<void>;
}

const QuizPageContext = createContext<QuizPageContextProps | undefined>(undefined);

export const QuizPageProvider = ({ children }: { children: ReactNode }) => {
  const [quizData, setQuizData] = useState<any>(null);

  const handleCreateQuiz = async (name: string, difficulty: number, author: string) => {
    try {
      const result = await postPackageInfo(name, difficulty, author)
      setQuizData(result)
      return result
    } catch (error) {
      console.error('Failed to post quiz data:', error);
    }
  };
  const handleTag = async (tag: string) => {
    try {
      const result = await postTagInfo(tag, quizData.id)
      console.log(result)
      setQuizData((prevData: any) => ({
      ...prevData,
      ...result
    }));
      return result
    } catch (error) {
      console.error('Failed to post tag quiz data in context:', error);
    }
  };
  return (
    <QuizPageContext.Provider
      value={{
        quizData,
        // fetchQuizData: handleFetchQuizData,
        createPackage: handleCreateQuiz,
        createTag: handleTag
      }}
    >
      {children}
    </QuizPageContext.Provider>
  );
};

export const useQuizPage = () => {
  const context = useContext(QuizPageContext);
  if (!context) {
    throw new Error('useQuizPage must be used within a QuizPageProvider');
  }
  return context;
};