import { createIcon } from "@chakra-ui/react"

export const Home = createIcon({
  displayName: "Home",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpHome)">
        <path
          d="M19 19V9.8l-7-5.523L5 9.8V19h14Zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.31a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.785V20ZM7 12h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="cpHome">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
