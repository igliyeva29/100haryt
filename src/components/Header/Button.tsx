import type { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  title?: string;
  action?: () => void;
  active?: boolean;
}

function Button({ children, title, action, active }: ButtonType) {
  return (
    <div>
      <button onClick={action} className={"flex items-center w-max py-3 px-3 rounded-lg border border-gray-200 hover:text-custom-green hover:border-custom-green transition-all " + (active && "text-custom-green border-custom-green")}>
        {children}
        <span>{title}</span>
      </button>
    </div>
  )
}

export default Button