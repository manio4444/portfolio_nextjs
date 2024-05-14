"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { type PropsWithChildren, useEffect } from "react";

export default function AOSProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init();
  }, []);

  return children;
}
