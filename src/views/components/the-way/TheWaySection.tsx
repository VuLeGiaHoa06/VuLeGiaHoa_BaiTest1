import React from "react";
import { ImpactStatsHeader } from "./ImpactStatsHeader";
import { StoryFeatureBlock } from "./StoryFeatureBlock";

interface TheWaySectionProps {
  title?: string;
}

export const TheWaySection: React.FC<TheWaySectionProps> = ({
  title = "The Nu Skin Way",
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-center my-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-purple-200" />
          </div>
          <div className="relative px-6 py-2 bg-[#551760] text-white font-bold text-sm sm:text-base tracking-wide rounded-sm shadow-md">
            <div className="flex items-center gap-3">
              <span className="w-4 h-0.5 bg-white/70" />
              <span>{title}</span>
              <span className="w-4 h-0.5 bg-white/70" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <ImpactStatsHeader />

        <StoryFeatureBlock
          title="Being a Force for Good"
          description="Some call it corporate social responsibility. We call it our purpose. Together we're engaged in initiatives worldwide—nourishing thousands of hungry children, funding pediatric health and wellness services, or striving for a more sustainable future. And sometimes, we're simply taking meaningful steps to improve our local communities. Whatever we do, we believe changing the world begins with a single action."
          ctaText="Explore our projects"
          imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&auto=format&fit=crop&q=80"
          imageAlt="Children eating nutritious food"
          reverse={false}
        />

        <StoryFeatureBlock
          title="Nature + Science"
          description="Capturing the best in nature to bring you the best results is our personal mission. We combine powerful ingredients with innovative science and technology. The result? World-class products that deliver real benefits. And even though we've spent more than 30 years researching aging at the genetic level, Mother Nature continually inspires us to push the boundaries of inquiry and innovation. We bottle what's best and bring it right to your door."
          ctaText="Discover more"
          imageSrc="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&auto=format&fit=crop&q=80"
          imageAlt="Green leaf and serum bottles with scientific beakers"
          reverse={true}
        />
      </div>
    </section>
  );
};
