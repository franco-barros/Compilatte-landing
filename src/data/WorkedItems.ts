import { IconType } from "react-icons";
import { FaLaptop, FaRocket, FaMobileAlt } from "react-icons/fa";

export interface WorkedItem {
  id: string;
  Icon: IconType;
  title: string;
  description: string;
}

export const workedItems: WorkedItem[] = [
  {
    id: "worked1",
    Icon: FaLaptop,
    title: "Empresa A",
    description: "Desarrollamos su plataforma de e-commerce escalable.",
  },
  {
    id: "worked2",
    Icon: FaRocket,
    title: "Startup B",
    description: "Optimizamos su flujo de trabajo con herramientas web.",
  },
  {
    id: "worked3",
    Icon: FaMobileAlt,
    title: "Proyecto C",
    description:
      "Creamos una app móvil para mejorar la experiencia de usuario.",
  },
];
