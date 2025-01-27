import React from 'react';
import { ArrowLeft, Download, Share2, CheckCircle, AlertTriangle, Compass, Heart, MessageCircle, Sparkles } from 'lucide-react';

interface AnalysisProps {
  analysis: {
    strengths: string[];
    currentChallenges: string[];
    futureChallenges: string[];
    compatibility: string;
    advice: string;
  };
  onReset: () => void;
}

export function Analysis({ analysis, onReset }: AnalysisProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Relationship Analysis</h2>
        <p className="text-gray-600">Here's what Relationship Baba sees in your situation</p>
      </div>

      <section className="space-y-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-green-800 mb-6">
            <CheckCircle className="w-6 h-6 mr-3" />
            Relationship Strengths
          </h2>
          <ul className="space-y-3">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="flex items-center text-green-700 bg-white/50 p-3 rounded-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-amber-800 mb-6">
            <AlertTriangle className="w-6 h-6 mr-3" />
            Current Challenges
          </h2>
          <ul className="space-y-3">
            {analysis.currentChallenges.map((challenge, index) => (
              <li key={index} className="flex items-center text-amber-700 bg-white/50 p-3 rounded-lg">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-blue-800 mb-6">
            <Compass className="w-6 h-6 mr-3" />
            Future Considerations
          </h2>
          <ul className="space-y-3">
            {analysis.futureChallenges.map((challenge, index) => (
              <li key={index} className="flex items-center text-blue-700 bg-white/50 p-3 rounded-lg">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-purple-800 mb-6">
            <Heart className="w-6 h-6 mr-3" />
            Compatibility Analysis
          </h2>
          <p className="text-purple-700 bg-white/50 p-4 rounded-lg">{analysis.compatibility}</p>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl border border-rose-100 shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-rose-800 mb-6">
            <MessageCircle className="w-6 h-6 mr-3" />
            Relationship Baba's Advice
          </h2>
          <p className="text-rose-700 bg-white/50 p-4 rounded-lg">{analysis.advice}</p>
        </div>
      </section>

      <div className="flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-gray-200">
        <button
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 text-gray-700
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500
            transition-all hover:shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Start Over
        </button>

        <div className="flex gap-4">
          <button
            onClick={() => {/* Implement download functionality */}}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600
              text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Advice
          </button>
          <button
            onClick={() => {/* Implement share functionality */}}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600
              text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}