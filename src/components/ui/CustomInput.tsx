import type { InputProps } from '@mantine/core';
import { Input } from '@mantine/core';

interface CustomInputProps extends InputProps {
  icon?: React.ReactNode;
  placeholder?: string; // Add the placeholder property
}

const CustomInput = (props: CustomInputProps) => <Input {...props} />;

export default CustomInput;
