"use client";

import { FC } from "react";
import { IconType } from "react-icons";

interface WorkedCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

const WorkedCard: FC<WorkedCardProps> = ({ Icon, title, description }) => (
  <div
    className="flex flex-col items-center p-8 rounded-2xl text-center
               shadow-lg hover:shadow-2xl transition duration-300 h-96 justify-between"
    style={{ backgroundColor: "#93e29a" }}
  >
    <div
      className="w-28 h-28 rounded-full border-4 border-cyan-500
                    flex items-center justify-center mb-6 bg-white text-cyan-600 text-4xl"
    >
      <Icon size={60} />
    </div>
    <h3 className="text-3xl font-semibold mb-4 text-cyan-800">{title}</h3>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

export default WorkedCard;
