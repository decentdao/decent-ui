import { createIcon } from "@chakra-ui/react"

export const ClockTwo = createIcon({
  displayName: "ClockTwo",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpClockTwo)">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Zm3.536-12.95 1.414 1.414-4.95 4.95L10.586 12l4.95-4.95Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpClockTwo">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
