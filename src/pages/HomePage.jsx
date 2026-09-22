import React from 'react';
import Hero from '../components/Hero';
import BeliefStatement from '../components/BeliefStatement';
import MissionSection from '../components/MissionSection';
import FocusAreas from '../components/FocusAreas';
import ActionJourney from '../components/ActionJourney';
import TeamSection from '../components/TeamSection';
import VolunteerBenefits from '../components/VolunteerBenefits';
import AdvocacySection from '../components/AdvocacySection';
import NurahMovementVisual from '../components/NurahMovementVisual';
import CTASection from '../components/CTASection';

export default function HomePage({ onOpenJoinModal, onOpenDonateModal }) {
  return (
    <>
      <Hero onOpenJoinModal={onOpenJoinModal} />
      <BeliefStatement />
      <MissionSection />
      <FocusAreas />
      <ActionJourney />
      <TeamSection />
      <VolunteerBenefits onOpenJoinModal={onOpenJoinModal} />
      <AdvocacySection onOpenJoinModal={onOpenJoinModal} />
      <NurahMovementVisual />
      <CTASection onOpenJoinModal={onOpenJoinModal} />
    </>
  );
}
