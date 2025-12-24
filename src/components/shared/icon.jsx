import {
  ShoppingCart,
  Smartphone,
  Cloud,
  Award,
  Users,
  Sparkles,
  Zap,
  Target,
  Heart,
  Coffee,
  Code,
} from "lucide-react";

const icons = {
  ShoppingCart,
  Smartphone,
  Cloud,
  Award,
  Users,
  Sparkles,
  Zap,
  Target,
  Heart,
  Coffee,
  Code,
};

export default function Icon({ name, className = "" }) {
  const IconComponent = icons[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
