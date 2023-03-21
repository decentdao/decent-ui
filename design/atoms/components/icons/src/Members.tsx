import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Members: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Members",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpMembers)">
        <path
          d="M3 21a7.238 7.238 0 1 1 14.476 0h-1.81A5.429 5.429 0 0 0 4.81 21H3Zm7.238-8.143c-3 0-5.428-2.43-5.428-5.428 0-3 2.429-5.429 5.428-5.429 3 0 5.429 2.43 5.429 5.429s-2.43 5.428-5.429 5.428Zm0-1.81a3.618 3.618 0 1 0 0-7.238c-2 0-3.619 1.62-3.619 3.62s1.62 3.619 3.62 3.619Zm7.495 3.351A7.24 7.24 0 0 1 22 21h-1.81a5.43 5.43 0 0 0-3.2-4.952l.742-1.65h.001Zm-.622-10.215a4.977 4.977 0 0 1-1.444 9.559v-1.821a3.167 3.167 0 0 0 .941-5.98l.503-1.758Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="cpMembers">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
