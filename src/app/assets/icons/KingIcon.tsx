import React from "react";

type Props = {
  className?: string;
};

export function KingIcon({ className }: Props) {
  return (
      <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
      >
        <rect
            x="0.588236"
            y="0.588236"
            width="38.8235"
            height="38.8235"
            rx="19.4118"
            fill="#F8F8FB"
        />
        <rect
            x="0.588236"
            y="0.588236"
            width="38.8235"
            height="38.8235"
            rx="19.4118"
            stroke="#E2E9FC"
            strokeWidth="1.17647"
        />
        <path
            d="M24.147 26.1587H15.8529C15.4823 26.1587 15.0676 25.8675 14.9441 25.5146L11.2911 15.2969C10.7705 13.8322 11.3794 13.3822 12.6323 14.2822L16.0735 16.744C16.647 17.141 17.3 16.9381 17.547 16.294L19.1 12.1557C19.5941 10.8322 20.4147 10.8322 20.9088 12.1557L22.4617 16.294C22.7088 16.9381 23.3617 17.141 23.9264 16.744L27.1558 14.441C28.5323 13.4528 29.1941 13.9557 28.6294 15.5528L25.0647 25.5322C24.9323 25.8675 24.5176 26.1587 24.147 26.1587Z"
            stroke="#FF6A3D"
            strokeWidth="1.32353"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.147 28.8234H24.8529"
            stroke="#FF6A3D"
            strokeWidth="1.32353"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M17.7941 21.7645H22.2059"
            stroke="#FF6A3D"
            strokeWidth="1.32353"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}
