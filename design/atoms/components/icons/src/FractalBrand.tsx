import { createIcon } from "@chakra-ui/react"

export const FractalBrand = createIcon({
  displayName: "FractalBrand",
  viewBox: "0 0 68 68",
  path: (
    <svg>
      <rect width="68" height="68" rx="8" fill="url(#lgFractalBrand-a)" />
      <path d="M26 14h18v6.384H32.504v10.862H41.5v6.435h-8.996V54H26V14Z" fill="url(#lgFractalBrand-b)" />
      <defs>
        <linearGradient id="lgFractalBrand-a" x1="34" y1="0" x2="34" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#272520" />
          <stop offset="1" stopColor="#1B1A18" />
        </linearGradient>
        <linearGradient id="lgFractalBrand-b" x1="35" y1="14" x2="35" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FABD2E" />
          <stop offset="1" stopColor="#FFD36E" />
        </linearGradient>
      </defs>
    </svg>

  ),
})
