import type { ReactNode } from "react";

export type PopupProps = {
  open: boolean;
  title: string;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  active?: "girmek" | "agza bolmak";
  setActive: (active: "girmek" | "agza bolmak") => void;
  sendData: () => void;
}

export type InputProp = {
  label: string;
  type: string;
  defaultValue?: string;
  name: string;
  onChange: (e: any) => void;
  value: string | undefined;
  regex?: RegExp;
  enterFunc?: () => void;
}