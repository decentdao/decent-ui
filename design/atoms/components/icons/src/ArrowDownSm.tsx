import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const ArrowDownSm: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "ArrowDownSm",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpArrowDownSm)">
        <path d="m12 15-4.243-4.243 1.415-1.414L12 12.172l2.828-2.83 1.415 1.415L12 15Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpArrowDownSm">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
