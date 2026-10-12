import React from "react";
import { CategorySidebar } from "./CategorySidebar";
import { HeroNavBar } from "./HeroNavBar";
import { MainSlider } from "./MainSlider";
import { PromoBanner } from "./PromoBanner";
import { HeroHeaderSearch } from "./HeroHeaderSearch";

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <HeroHeaderSearch />

      <div className="flex flex-col lg:flex-row gap-6 items-start mt-2">
        <CategorySidebar />

        <div className="flex-1 w-full flex flex-col gap-4">
          <HeroNavBar />
          <MainSlider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <PromoBanner
              subtitle="PREFER CUSTOMER 2025"
              title="Winter Collection"
              image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80"
              buttonText="Shop Now"
            />
            <PromoBanner
              subtitle="PREFER CUSTOMER 2025"
              title="Winter Collection"
              image="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80"
              buttonText="Shop Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
