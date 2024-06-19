import { Input, InputProps } from '@mantine/core';
import React from 'react';

interface TextInputProps extends InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return <Input {...props} />;
};

export default TextInput;
