import React from "react";
import { RegistrationNotes } from "@/types";
import { Card } from "@/components/ui/card";
import { Section } from "@ui/section";

interface TermsCardProps {
  terms: string[];
  theme?: "green" | "blue" | "red";
  deadline?: string;
}

const TermsCard: React.FC<TermsCardProps> = ({ terms, deadline, theme = "green" }) => (
  <Card className="overflow-hidden w-full relative transition-all hover:shadow-xl" theme={theme}>
    <div className="absolute inset-0 bg-gradient-to-r from-(--gradient-start) to-(--gradient-end) opacity-60"></div>

    <div className="flex flex-col h-full w-full relative z-10">
      <div className="flex-1 p-8 flex flex-col text-white space-y-6">
        {deadline && (
          <div className="text-sm bg-white/10 px-4 py-2 rounded-lg w-fit self-center text-white font-medium tracking-wide">
            Registration Deadline: {deadline}
          </div>
        )}

        <h3 className="text-2xl font-bold flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Event Terms and Conditions
        </h3>

        <ul className="space-y-4">
          {terms.map((term, i) => (
            <li key={i} className="flex items-start">
              <div className="bg-white/20 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">
                <span className="text-sm font-bold">{i + 1}</span>
              </div>
              <p className="opacity-90">{term}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-8 py-5 bg-[var(--attribute-block)] bg-opacity-80 text-white w-full text-center text-sm">
        Please read the above terms carefully.
      </div>
    </div>
  </Card>
);

interface RegistrationNotesSectionProps {
  notes: RegistrationNotes;
  theme?: "green" | "blue" | "red";
  className?: string;
}

export const RegistrationNotesSection: React.FC<RegistrationNotesSectionProps> = ({ 
  notes, 
  theme = "green",
  className 
}) => {
  return (
    <Section title="Registration Deadline & Policies" className={className}>
      <div data-card-theme={theme} className="w-full">
        <TermsCard terms={notes.terms} deadline={notes.deadline} theme={theme} />
      </div>
    </Section>
  );
};
