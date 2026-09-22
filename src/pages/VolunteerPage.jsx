import React from 'react';
import VolunteerBenefits from '../components/VolunteerBenefits';
import ActionJourney from '../components/ActionJourney';
import CTASection from '../components/CTASection';

export default function VolunteerPage({ onOpenJoinModal }) {
  return (
    <div className="pt-20">
      <VolunteerBenefits onOpenJoinModal={onOpenJoinModal} />
      <ActionJourney />
      <CTASection onOpenJoinModal={onOpenJoinModal} />
    </div>
  );
}
