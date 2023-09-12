"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
} from "@/components/ui/dialog"

const AuthModal = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  if(pathname.includes("dashboard")) return null

  return (
    <Dialog defaultOpen onOpenChange={onDismiss}>
      {children}
    </Dialog>
  );
};

export default AuthModal;