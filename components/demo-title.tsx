import Link from "next/link"

import { Icons } from "@/components/icons"

interface DemoTitleProps {
  title: string
  githubLink: string
  size?: "large" | "small"
}

export function DemoTitle({
  title,
  githubLink,
  size = "small",
}: DemoTitleProps) {
  const TitleTag = size === "large" ? "h2" : "h3"
  const titleClass = size === "large" ? "text-2xl" : "text-xl"

  return (
    <TitleTag
      className={`${titleClass} font-bold flex justify-between items-center`}
    >
      <span>{title}</span>
      <Link href={githubLink} className="ml-2" target="_blank">
        <Icons.gitHub className="h-5 w-5" />
      </Link>
    </TitleTag>
  )
}
