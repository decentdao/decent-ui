import { createIcon } from "@chakra-ui/react"

export const Filter = createIcon({
  displayName: "Filter",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpFilter)">
        <path d="M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpFilter">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>

  ),
})
