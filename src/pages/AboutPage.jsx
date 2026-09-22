import React from 'react';
import BeliefStatement from '../components/BeliefStatement';
import MissionSection from '../components/MissionSection';
import CTASection from '../components/CTASection';

export default function AboutPage({ onOpenJoinModal }) {
  return (
    <div className="pt-20">
      <BeliefStatement />
      <MissionSection />
      <CTASection onOpenJoinModal={onOpenJoinModal} />
    </div>
  );
}
