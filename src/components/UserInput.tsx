import React from 'react';
import { ArrowRight, Loader2, HeartHandshake, Sparkles } from 'lucide-react';
import type { Gender, Situation } from '../App';

interface UserInputProps {
  formData: {
    gender: Gender;
    situation: Situation;
    userSituation: string;
    partnerSituation: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    gender: Gender;
    situation: Situation;
    userSituation: string;
    partnerSituation: string;
  }>>;
  onSubmit: () => void;
  isLoading: boolean;
}

export function UserInput({ formData, setFormData, onSubmit, isLoading }: UserInputProps) {
  const isFormValid = formData.gender && formData.situation && 
    formData.userSituation.length >= 50 && formData.partnerSituation.length >= 50;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <HeartHandshake className="w-12 h-12 text-rose-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Your Story</h2>
        <p className="text-gray-600">Let's understand your relationship better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select your gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value as Gender }))}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500
              bg-white/50 backdrop-blur-sm transition-all hover:border-rose-400"
          >
            <option value="">Choose...</option>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
          <Sparkles className="w-4 h-4 text-rose-400 absolute right-3 top-9 pointer-events-none" />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What is your current situation?
          </label>
          <select
            value={formData.situation}
            onChange={(e) => setFormData(prev => ({ ...prev, situation: e.target.value as Situation }))}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500
              bg-white/50 backdrop-blur-sm transition-all hover:border-rose-400"
          >
            <option value="">Choose...</option>
            <option value="relationship">In a Relationship</option>
            <option value="breakup">Going through a Breakup</option>
          </select>
          <Sparkles className="w-4 h-4 text-rose-400 absolute right-3 top-9 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe your situation in detail
          </label>
          <textarea
            value={formData.userSituation}
            onChange={(e) => setFormData(prev => ({ ...prev, userSituation: e.target.value }))}
            placeholder="How do you feel? What's happening in your relationship? (minimum 50 characters)"
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500
              bg-white/50 backdrop-blur-sm transition-all hover:border-rose-400 resize-none"
          />
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            <span className={formData.userSituation.length >= 50 ? 'text-green-500' : ''}>
              {formData.userSituation.length}
            </span>
            <span className="mx-1">/</span>
            <span>50 characters minimum</span>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe your partner's situation
          </label>
          <textarea
            value={formData.partnerSituation}
            onChange={(e) => setFormData(prev => ({ ...prev, partnerSituation: e.target.value }))}
            placeholder="What's your partner's perspective? How are they handling the situation? (minimum 50 characters)"
            rows={4}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500
              bg-white/50 backdrop-blur-sm transition-all hover:border-rose-400 resize-none"
          />
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            <span className={formData.partnerSituation.length >= 50 ? 'text-green-500' : ''}>
              {formData.partnerSituation.length}
            </span>
            <span className="mx-1">/</span>
            <span>50 characters minimum</span>
          </p>
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={onSubmit}
          disabled={!isFormValid || isLoading}
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600
            text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Analyzing...
            </>
          ) : (
            <>
              Get Advice
              <ArrowRight className="ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}