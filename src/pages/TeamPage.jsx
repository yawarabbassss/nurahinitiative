import React from 'react';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';

export default function TeamPage({ onOpenJoinModal }) {
  return (
    <div className="pt-20">
      <TeamSection />
      <CTASection onOpenJoinModal={onOpenJoinModal} />
    </div>
  );
}
