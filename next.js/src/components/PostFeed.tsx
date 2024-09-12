"use client";

import { useEffect, useState } from "react";

// Mock component to simulate loading with setTimeout
function DelayedPostFeed() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isLoaded) {
    // Component is still loading
    throw new Promise(() => {});
  }

  return (
    <div>
      Hello PostFeed
    </div>
  );
}

export default DelayedPostFeed;
