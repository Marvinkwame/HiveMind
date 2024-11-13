import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type LoadingButtonProps = {
  isLoading: boolean;
  children: React.ReactNode;
  loadingText: string;
};

const LoadingButton = ({
  isLoading,
  children,
  loadingText,
}: LoadingButtonProps) => {
  return (
    <Button disabled={isLoading} type="submit">
      {isLoading && <Loader2 className="animate-spin" />}
      {isLoading ? loadingText : children}
    </Button>
  );
};

export default LoadingButton;
