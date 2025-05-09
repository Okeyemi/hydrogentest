"use client"
import React, { useState } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import POSKits from "./components/POSKits";
import BenefitsSection from "./components/Benefit";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <POSKits />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
