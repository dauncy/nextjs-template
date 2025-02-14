"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const useRevalidate = () => {
  const [isRevalidating, startTransition] = useTransition();
  const router = useRouter();

  const revalidate = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  return {
    isRevalidating,
    revalidate,
  };
};
