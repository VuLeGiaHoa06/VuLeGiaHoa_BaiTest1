import React from "react";

export interface ImpactStat {
  value: string;
  label: string;
  sublabel?: string;
  underline?: boolean;
}

interface ImpactStatsHeaderProps {
  title?: string;
  subtitle?: string;
  stats?: ImpactStat[];
}

const defaultStats: ImpactStat[] = [
  {
    value: "25+",
    label: "Years of Giving",
  },
  {
    value: "20+",
    label: "Current Social Projects",
    underline: true,
  },
  {
    value: "850M+",
    label: "Meals Donated through",
    sublabel: "Nourish the Children",
    underline: true,
  },
];

export const ImpactStatsHeader: React.FC<ImpactStatsHeaderProps> = ({
  title = "Nu Skin,",
  subtitle = "Improving Lives Everyday",
  stats = defaultStats,
}) => {
  return (
    <div className="w-full bg-[#fbfbfb] border border-gray-100 p-6 sm:p-8 lg:p-10 mb-8 shadow-xs">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight leading-tight">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-start gap-8 sm:gap-14 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                {stat.value}
              </span>
              <p
                className={`text-[11px] sm:text-xs text-gray-600 font-normal leading-tight ${
                  stat.underline ? "underline cursor-pointer hover:text-black" : ""
                }`}
              >
                {stat.label}
              </p>
              {stat.sublabel && (
                <p
                  className={`text-[11px] sm:text-xs text-gray-600 font-normal leading-tight ${
                    stat.underline ? "underline cursor-pointer hover:text-black" : ""
                  }`}
                >
                  {stat.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
