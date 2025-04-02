import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconDefinition;
  title?: string;
  onClick?: () => void;
  color?: string;
  size?: "small" | "medium" | "large";
  onlyIcon?: boolean;
  className?: string;
  label?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  title,
  onClick,
  color = "currentColor",
  size = "medium",
  onlyIcon = false,
  className = "",
}) => {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  };

  return (
    <div
      className={`inline-flex items-center justify-center ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
      title={title}
    >
      <FontAwesomeIcon
        icon={icon}
        className={sizeClass[size]}
        style={{ color }}
      />
      {!onlyIcon && title && <span className="ml-2">{title}</span>}
    </div>
  );
};
