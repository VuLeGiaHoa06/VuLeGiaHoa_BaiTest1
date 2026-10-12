import React from "react";
import { useAppController } from "../../controllers/useAppController";
import { HeroSection } from "../components/hero";
import {
  MostPopularSection,
  SkincareFeatureBanner,
} from "../components/popular";
import { AwardRecognitionSection } from "../components/awards";
import { TheWaySection } from "../components/the-way";
import { NewsSection } from "../components/news";

export const HomePage: React.FC = () => {
  const { addToCart } = useAppController();

  return (
    <div className="space-y-6 pb-16">
      <HeroSection />

      <MostPopularSection onAddToCart={addToCart} />

      <SkincareFeatureBanner />

      <AwardRecognitionSection />

      <TheWaySection />

      <NewsSection />
    </div>
  );
};
