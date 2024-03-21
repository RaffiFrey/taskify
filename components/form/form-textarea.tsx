"use client"

import {forwardRef, KeyboardEventHandler} from "react";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";
import {FormErrors} from "@/components/form/form-errors";
import {useFormStatus} from "react-dom";

interface FormTextAreaProps {
    id: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: Record<string, string[] | undefined>;
    className?: string;
    onBlur?: () => void;
    onClick?: () => void;
    onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | undefined>;
    defaultValue?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(({
    id, label, placeholder, required, disabled, error, className, onBlur, onClick, onKeyDown, defaultValue
}, ref) => {

    const {pending} = useFormStatus();

    return (
        <div className={"space-y-2 w-full"}>
            <div className={"space-y-1 w-full"}>
                {label ? (
                    <Label
                        htmlFor={id}
                        className={"text-xs font-semibold text-neutral-700"}
                    >
                        {label}
                    </Label>
                ) : null}
                <Textarea
                    onKeyDown={onKeyDown}
                    onClick={onClick}
                    onBlur={onBlur}
                    ref={ref}
                    required={required}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    disabled={pending || disabled}
                    className={cn(
                        "resize-none focus-visible:ring-0 focus-visible:ring-offset-0 ring-0 focus-ring-0 outline-none shadow-sm", className)}
                    aria-describedby={`{id}-error`}
                    defaultValue={defaultValue}
                />
            </div>
            <FormErrors
                id={id}
                errors={error}
            />
        </div>
    )
})


FormTextarea.displayName = "FormTextarea";