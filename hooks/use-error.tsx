"use client";

import { AlertOctagon } from "lucide-react";
import { toast } from "sonner";

interface ErrorDTO {
  message?: string;
  toastTitle?: string;
}

export const useError = () => {
  const handleErrorToast = ({
    message = "An unexpected error occurred. Please try again.",
    toastTitle = "Server Error",
  }: ErrorDTO) => {
    toast.error(
      <div className="flex items-start gap-x-2">
        <AlertOctagon className="size-5 text-destructive" strokeWidth={3} />
        <div className="flex flex-1 flex-col gap-y-1">
          <p className="text-sm font-semibold text-foreground">{toastTitle}</p>
          <p className="text-sm font-normal text-muted-foreground">{message}</p>
        </div>
      </div>,
    );
  };

  return {
    handleErrorToast,
  };
};
