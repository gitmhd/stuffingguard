"use client";

import { useEffect, useRef } from "react";

export default function VisitCounter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    // Only count once per page load
    if (hasCounted.current) return;
    hasCounted.current = true;

    // Increment visit count on server
    fetch("/api/visit", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the input value with the new count
        if (inputRef.current) {
          inputRef.current.value = data.visits.toString();
        }
      })
      .catch((error) => {
        console.error("Failed to record visit:", error);
      });
  }, []);

  return (
    <input
      ref={inputRef}
      type="hidden"
      id="visit-counter"
      name="visit-counter"
      defaultValue="0"
    />
  );
}
