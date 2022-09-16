import { createIcon } from "@chakra-ui/react"

export const Notifications = createIcon({
  displayName: "Notifications",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#a)">
        <path
          d="M5.488 16.884h13.024V10.4c0-3.612-2.916-6.54-6.512-6.54-3.596 0-6.512 2.928-6.512 6.54v6.483ZM12 2c4.623 0 8.372 3.76 8.372 8.4v8.344H3.628v-8.343C3.628 5.76 7.377 2 12 2ZM9.674 19.674h4.652a2.326 2.326 0 0 1-4.652 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
