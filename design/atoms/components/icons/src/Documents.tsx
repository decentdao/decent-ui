import { ComponentWithAs, createIcon, IconProps } from "@chakra-ui/react"

export const Documents: ComponentWithAs<"svg", IconProps> = createIcon({
  displayName: "Documents",
  viewBox: "0 0 24 24",
  path: (
    <svg>
      <g clipPath="url(#cpDocuments)">
        <path
          d="M12.9 19.2V21h-1.8v-1.8H3.9a.9.9 0 0 1-.9-.9V3.9a.9.9 0 0 1 .9-.9h5.4A3.591 3.591 0 0 1 12 4.219 3.591 3.591 0 0 1 14.7 3h5.4a.9.9 0 0 1 .9.9v14.4a.9.9 0 0 1-.9.9h-7.2Zm6.3-1.8V4.8h-4.5a1.8 1.8 0 0 0-1.8 1.8v10.8h6.3Zm-8.1 0V6.6a1.8 1.8 0 0 0-1.8-1.8H4.8v12.6h6.3Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="cpDocuments">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
})
