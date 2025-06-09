"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Speaker } from "@/types/medtex";

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full cursor-pointer"
      theme={"green"}
    >
      <div className="w-full h-80">
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="px-5 py-4 bg-(--attribute-block) text-center text-white w-full flex-grow">
        <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
        <p className="text-sm">{speaker.title}</p>
      </div>
    </Card>
  );
};

interface KeynoteSpeakersProps {
  speakers: Speaker[];
  title?: string;
}

export const KeynoteSpeakers = ({ speakers, title }: KeynoteSpeakersProps) => (
  <Section title={title}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
  </Section>
);
