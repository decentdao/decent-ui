import { createIcon } from "@chakra-ui/react"

export const DoubleCheck = createIcon({
  displayName: "DoubleCheck",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpDoubleCheck)">
        <path d="m11.602 13.76 1.412 1.412 8.466-8.466 1.414 1.414-9.88 9.88-6.364-6.364 1.414-1.413 2.125 2.124 1.413 1.412v.002Zm.002-2.828 4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41Zm-2.827 5.655L7.364 18 1 11.636l1.414-1.413 1.413 1.412-.001.002 4.95 4.95Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="cpDoubleCheck">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>


  ),
})

