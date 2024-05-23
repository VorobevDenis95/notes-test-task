import { ChangeEvent } from "react";

interface InputTodoProps {
  value: string;
  changeInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type {
  InputTodoProps
}