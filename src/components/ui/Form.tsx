import { HTMLAttributes, LabelHTMLAttributes } from 'react';
import { FormProvider } from 'react-hook-form';

export const Form = FormProvider;


export const FormItem = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => <div className="space-y-2" {...props}>{children}</div>;
export const FormLabel = ({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => <label className="text-sm font-medium" {...props}>{children}</label>;
export const FormControl = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
export const FormDescription = ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => <p className="text-sm text-muted-foreground" {...props}>{children}</p>;
export const FormMessage = ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => <p className="text-sm text-red-500" {...props}>{children}</p>;

