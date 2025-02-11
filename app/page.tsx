"use client"

import { useState } from "react"
import Header from "./components/Header"
import Content from "./components/Content"

export default function Home() {
  const [activeDomain, setActiveDomain] = useState("me")

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Header activeDomain={activeDomain} setActiveDomain={setActiveDomain} />
      <Content activeDomain={activeDomain} />
    </main>
  )
}

