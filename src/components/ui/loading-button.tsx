import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "./button";

type LoadingButtonProps = {
    loading: boolean;
} & ButtonProps;

export default function LoadingButton({
    children,
    loading,
    ...props
}: LoadingButtonProps) {
    return (
        <Button className="px-14"{...props} disabled={props.disabled || loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </Button>
    );
}