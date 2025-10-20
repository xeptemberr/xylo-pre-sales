"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface TokenomicsChartProps {
  className?: string;
}

export default function TokenomicsChart({
  className = "",
}: TokenomicsChartProps) {
  // Create gradients for each segment
  const createGradient = (
    ctx: CanvasRenderingContext2D,
    color1: string,
    color2: string
  ) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

  const getGradients = (ctx: CanvasRenderingContext2D) => {
    return {
      liquidity: createGradient(ctx, "#BEE9BB", "#FFFFFF"), // Light green to green
      marketing: createGradient(ctx, "#F8F8F8", "#3F3F43"), // Light green to emerald
      development: createGradient(ctx, "#F8F8F8", "#828091"), // Dark gray to darker gray
      team: createGradient(ctx, "#F1F1F1", "#D9D9D9"), // Medium gray to dark gray
      reserve: createGradient(ctx, "#F1F1F1", "#D9D9D9"), // Light gray to medium gray
    };
  };

  const data = {
    labels: ["Liquidity", "Marketing", "Development", "Team", "Reserve"],
    datasets: [
      {
        data: [35, 18, 12, 8, 12],
        backgroundColor: (
          context: import("chart.js").ScriptableContext<"doughnut">
        ) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return undefined;

          const gradients = getGradients(ctx);
          return [
            gradients.liquidity,
            gradients.marketing,
            gradients.development,
            gradients.team,
            gradients.reserve,
          ] as any;
        },
        borderColor: ["#86efac", "#86efac", "#6b7280", "#9ca3af", "#d1d5db"],
        borderWidth: 0,
        cutout: "60%",
        spacing: 8, // Gap between segments
        borderRadius: 8, // Rounded corners
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Hide tooltip
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
    },
  };

  return (
    <div className={`relative w-80 h-80 ${className}`}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
