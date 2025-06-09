"use client";

import React, { useState, useEffect } from "react";
import { RegistrationPackage } from "@/types";
import { Card } from "@/components/ui/card";
import { Section } from "@ui/section";
import { useRouter } from "next/navigation";
import { Routes } from "@/config/routes";

interface PackageCardProps {
  pkg: RegistrationPackage;
  isSelected: boolean;
  isRecommended?: boolean;
  theme?: "green" | "blue" | "red";
  onClick: () => void;
}

const PackageCard = ({ pkg, isSelected, isRecommended = false, theme = "green", onClick }: PackageCardProps) => (
  <Card 
    className={`overflow-hidden hover:shadow-xl transition-all h-full min-h-[400px] w-full relative transform hover:-translate-y-1 cursor-pointer ${
      isSelected ? 'ring-4 ring-b2b-lv3' : ''
    }`}
    theme={theme}
    onClick={onClick}
  >
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-(--gradient-start) to-(--gradient-end)"></div>
    
    {/* Recommended badge */}
    {isRecommended && (
      <div className="absolute top-4 right-4 bg-b2b-lv3 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
        Recommended
      </div>
    )}
    
    <div className="flex flex-col h-full w-full relative z-10">
      {/* Main content area */}
      <div className="flex-1 p-8 flex flex-col text-white">
        <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
        <div className="mb-4 pb-4 border-b border-gray-200/30">
          <p className="text-3xl font-bold">{pkg.price}</p>
        </div>
        
        {/* Render description as bullet points if it's an array, or as paragraph if it's a string */}
        {Array.isArray(pkg.description) ? (
          <ul className="list-disc pl-5 space-y-1 mb-8">
            {pkg.description.map((item, index) => (
              <li key={index} className="opacity-90">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="opacity-90 mb-8">{pkg.description}</p>
        )}
        
        <div className="mt-auto"></div>
      </div>
      
      {/* Footer area */}
      <div className="px-8 py-5 bg-[var(--attribute-block)] bg-opacity-80 text-white w-full">
        <div className="flex justify-center items-center w-full">
          {isSelected ? (
            <span className="text-base font-medium">Selected</span>
          ) : (
            <span className="text-base font-medium">Register Now</span>
          )}
        </div>
      </div>
    </div>
  </Card>
);

interface PackagesSectionProps {
  packages: RegistrationPackage[];
  theme?: "green" | "blue" | "red";
  className?: string;
  onSelectPackage?: (pkg: RegistrationPackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ 
  packages, 
  theme = "green", 
  className,
  onSelectPackage 
}) => {
  const router = useRouter();
  
  // 設定預設選擇為 conference_and_party 方案
  const defaultPackage = packages.find(p => p.id === "conference_and_party")?.id || (packages[0]?.id || null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(defaultPackage);
  
  // 初始化時通知父組件預設選擇
  useEffect(() => {
    if (defaultPackage && onSelectPackage) {
      const pkg = packages.find(p => p.id === defaultPackage);
      if (pkg) {
        onSelectPackage(pkg);
      }
    }
  }, []);

  const handlePackageSelect = (pkg: RegistrationPackage) => {
    setSelectedPackage(pkg.id);
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
  };

  const handleProceedToPayment = () => {
    // Navigate to the registration form page with the selected package as a query parameter
    if (selectedPackage) {
      router.push(`${Routes.public.eventRegisterForm}?packageId=${selectedPackage}`);
    } else {
      router.push(Routes.public.eventRegisterForm);
    }
  };

  // 檢查是否為推薦方案 (conference_and_party 方案)
  const isRecommended = (pkg: RegistrationPackage) => {
    return pkg.id === "conference_and_party";
  };

  return (
    <Section title="Registration Packages" className={className}>
      <div data-card-theme={theme} className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackage === pkg.id}
              isRecommended={isRecommended(pkg)}
              theme={theme}
              onClick={() => handlePackageSelect(pkg)}
            />
          ))}
        </div>
      </div>
      
      {/* Proceed to Payment button */}
      {selectedPackage && (
        <div className="mt-12 flex justify-center w-full">
          <button
            onClick={handleProceedToPayment}
            className="px-8 py-4 bg-b2b-lv4 hover:bg-b2b-lv5 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </Section>
  );
};
