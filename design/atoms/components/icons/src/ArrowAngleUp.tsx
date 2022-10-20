import { createIcon } from "@chakra-ui/react"

export const ArrowAngleUp = createIcon({
  displayName: "ArrowAngleUp",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpArrowAngleUp)">
        <path
          d="m15.326 9.853-7.151 7.151L7 15.83l7.15-7.152H7.848V7.017h9.14v9.14h-1.662V9.852Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="cpArrowAngleUp">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
