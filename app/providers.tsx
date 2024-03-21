"use client"

import { PropsWithChildren } from "react"
import { ThemeProvider } from "../src/components/ui/theme-provider"
import { Toaster } from "sonner"

export type ProvidersProps = PropsWithChildren

export const Providers = (props: ProvidersProps) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Toaster />
         {props.children}
        </ThemeProvider>
    )
}