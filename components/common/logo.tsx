

import { cn } from "@/lib/utils"
import Image from "next/image"

interface PropType {
  className?: string
}
export function Logo({ className }: PropType) {
  return (
    <Image src="/images/logo.svg" alt="لوگوی تیمرس" width={200} height={40} className={cn('text-primary', className)} />
  )
}
