import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { EyeIcon, EyeOff } from "lucide-react"


const inputVariants = cva(
  "flex w-full rounded-lg border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50",

  {
    variants: {
      variant: {
        default: "h-12 px-3 py-2 focus:border-primary transition-colors duration-300 rtl:focus:placeholder:-translate-x-3 placeholder:transition-transform placeholder:duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export type RegexType = 'ONLY_DIGIT' | 'ONLY_CHAR' | 'ONLY_DIGIT_CHAR';
const regexPatterns: Record<RegexType, RegExp> = {
  ONLY_DIGIT: /^[0-9]*$/,
  ONLY_CHAR: /^[a-zA-Z]*$/,
  ONLY_DIGIT_CHAR: /^[a-zA-Z0-9]*$/,

};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  regex?: RegexType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, regex, ...props }, ref) => {
    const [togglePasswordReveal, setTogglePasswordReveal] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      // if regex does not provided, All Chars are Available
      const pattern = regex ? regexPatterns[regex] : /.*/;
      if (pattern.test(value)) {
        setInputValue(value);
        if (props.onChange) {
          props.onChange(event);
        }
      }
    };
    return (
      <div className="relative w-full">
        <input
          type={togglePasswordReveal ? 'text' : type}
          className={cn(
            inputVariants({ variant, className }),
            type === 'password' ? 'pe-12' : ''
          )}
          value={inputValue}
          onChange={handleInputChange}
          ref={ref}
          {...props}

        />
        {/* Password Reveal */}
        {type === 'password' && (
          <div dir={props.dir}>
            <PasswordReveal
              togglePasswordReveal={togglePasswordReveal}
              setTogglePasswordReveal={setTogglePasswordReveal} />
          </div>
        )}

      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

function PasswordReveal({ setTogglePasswordReveal, togglePasswordReveal }: {
  setTogglePasswordReveal: (state: boolean) => void,
  togglePasswordReveal: boolean
}) {

  return (
    <span className="absolute end-4 inset-y-0 flex items-center justify-center">
      <span className="text-muted-foreground cursor-pointer " onClick={() => setTogglePasswordReveal(!togglePasswordReveal)}>
        {togglePasswordReveal ? <EyeOff /> : <EyeIcon />}
      </span>
    </span>
  )
}
