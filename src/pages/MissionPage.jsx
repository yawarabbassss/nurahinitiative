import React from 'react';
import MissionSection from '../components/MissionSection';
import FocusAreas from '../components/FocusAreas';
import ActionJourney from '../components/ActionJourney';
import CTASection from '../components/CTASection';

export default function MissionPage({ onOpenJoinModal }) {
  return (
    <div className="pt-20">
      <MissionSection />
      <FocusAreas />
      <ActionJourney />
      <CTASection onOpenJoinModal={onOpenJoinModal} />
    </div>
  );
}
