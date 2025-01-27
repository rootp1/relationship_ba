import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Steps } from './components/Steps';
import { UserInput } from './components/UserInput';
import { Analysis } from './components/Analysis';

export type Situation = 'relationship' | 'breakup';
export type Gender = 'boy' | 'girl';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    gender: '' as Gender,
    situation: '' as Situation,
    userSituation: '',
    partnerSituation: '',
  });
  const [analysis, setAnalysis] = useState<null | {
    strengths: string[];
    currentChallenges: string[];
    futureChallenges: string[];
    compatibility: string;
    advice: string;
  }>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Call the backend API
      const response = await fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch analysis. Please try again.');
      }

      const data = await response.json();

      // Update the analysis state with the response data
      setAnalysis({
        strengths: data.strengths || [],
        currentChallenges: data.currentChallenges || [],
        futureChallenges: data.futureChallenges || [],
        compatibility: data.compatibility || '',
        advice: data.advice || '',
      });

      // Move to the next step
      setCurrentStep(2);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 relative">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Heart className="w-12 h-12 text-rose-500" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 ml-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Relationship Baba
            </h1>
          </div>
          <p className="text-gray-600 text-lg font-medium">Your guide to relationship clarity and wisdom</p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </header>

        <Steps currentStep={currentStep} />

        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 mt-8 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-purple-600/5"></div>
          <div className="relative">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            {currentStep === 1 ? (
              <UserInput
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            ) : (
              <Analysis analysis={analysis!} onReset={() => setCurrentStep(1)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;