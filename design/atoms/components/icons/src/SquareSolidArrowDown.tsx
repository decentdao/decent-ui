import { createIcon } from "@chakra-ui/react"

export const SquareSolidArrowDown = createIcon({
  displayName: "SquareSolidArrowDown",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpSquareSolidArrowDown)">
        <path d="M3 0a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm9.75 6.75v8.69l3.219-3.221a.752.752 0 0 1 1.062 1.062l-4.5 4.5a.75.75 0 0 1-1.062 0l-4.5-4.5a.75.75 0 1 1 1.062-1.062l3.219 3.22V6.75a.75.75 0 1 1 1.5 0Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpSquareSolidArrowDown">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
