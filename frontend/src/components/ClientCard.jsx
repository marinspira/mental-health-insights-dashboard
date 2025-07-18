import React, { useState } from 'react';
import MoodChart from './MoodChart';
import ScoreChart from './ScoreChart';
import RiskAlerts from './RiskAlerts';
import EmotionAnalyzer from './EmotionAnalyzer';
import { GAD_QUESTIONS, PHQ_QUESTIONS } from './PHQGADForm';
import Button from './Button';
import Modal from './Modal';
import QuestionnaireForm from './PHQGADForm';

export default function ClientCard({ data }) {

  const [showPHQ, setShowPHQ] = useState(false);
  const [showGAD, setShowGAD] = useState(false);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
      <h2 className="font-semibold text-lg mb-2">Client ID: {data.client_id}</h2>
      <p className="text-sm text-gray-700">
        Age Range: {data.age_range} | Gender: {data.gender}
      </p>
      <p className="text-sm text-gray-700 mb-2">
        Conditions: {data.conditions.join(', ')}
      </p>

      <RiskAlerts data={data} />

      <div className="flex-1 my-10">
        <ScoreChart phq9={data.phq9_scores} gad7={data.gad7_scores} />
      </div>

      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex-1 items-start">
          <EmotionAnalyzer />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center">
          <Button label="PHQ-9 Questionnaire" onClick={() => setShowPHQ(true)} />
          <Button label="GAD-7 Questionnaire" onClick={() => setShowGAD(true)} />
        </div>
      </div>

      <Modal isOpen={showPHQ} onClose={() => setShowPHQ(false)}>
        <QuestionnaireForm
          title="PHQ-9 Questionnaire"
          questions={PHQ_QUESTIONS}
          onSubmit={(data) => console.log(data)}
          onClose={() => setShowPHQ(false)}
        />
      </Modal>

      <Modal isOpen={showGAD} onClose={() => setShowGAD(false)}>
        <QuestionnaireForm
          title="GAD-7 Questionnaire"
          questions={GAD_QUESTIONS}
          onSubmit={(data) => console.log(data)}
          onClose={() => setShowGAD(false)}
        />
      </Modal>

    </div>
  );
}
