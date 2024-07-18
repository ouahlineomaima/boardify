"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps{
  errors?: {
    title?: string[];
  };
}
const FormInput = ({errors}:FormInputProps) => {
  // this works becaus the input is used inside a form 
  const {pending} = useFormStatus();
  return (
    <div className="flex flex-col space-y-2">
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter board title"
        type="text"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
