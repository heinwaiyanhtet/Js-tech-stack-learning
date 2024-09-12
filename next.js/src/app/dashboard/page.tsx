import { Suspense } from "react";
import PostFeed from "@/components/PostFeed";
import Weather from "@/components/Weather";

export default function page() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}
