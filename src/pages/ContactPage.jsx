import React from 'react';
import CTASection from '../components/CTASection';
import NurahMovementVisual from '../components/NurahMovementVisual';

export default function ContactPage({ onOpenJoinModal }) {
  return (
    <div className="pt-20">
      <CTASection onOpenJoinModal={onOpenJoinModal} />
      <NurahMovementVisual />
    </div>
  );
}
