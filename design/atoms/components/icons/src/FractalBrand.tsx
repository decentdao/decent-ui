import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const FractalBrand: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "FractalBrand",
  viewBox: "0 0 74 74",
  path: (
    <svg>
      <g filter="url(#filter0_d_204_1439)">
        <rect x="16" y="16" width="36" height="36" rx="5" fill="#FDCB57" />
      </g>
      <path d="M42.8453 23.8215V26.9002H28.7046V32.8062H40.2913V35.7591H28.7046V44.1783H25.1538V35.7591H28.7046V32.8062H25.1538V23.8215H42.8453Z" fill="#36342F" />
      <defs>
        <filter id="filter0_d_204_1439" x="-6" y="-6" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_204_1439" />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.686275 0 0 0 0 0.517647 0 0 0 0 0.12549 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_204_1439" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_204_1439" result="shape" />
        </filter>
      </defs>
    </svg>

  ),
})
