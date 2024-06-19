import { Input } from "@mantine/core";
// import { IconUser } from "@tabler/icons-react";


interface InputTextProps {
  placeholder?: string;
  label?: string;
  iconPosition?: "left" | "right";
}

export default function InputText({ placeholder, label, iconPosition }: InputTextProps) {
  return (
    <Input
      placeholder={placeholder || "Your name"}
      label={label || "Name"}
      iconPosition={iconPosition || "left"}
    />
  );
}