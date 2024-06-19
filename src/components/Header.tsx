import Link from 'next/link';
import { IconUser, IconShoppingCart, IconSearch } from '@tabler/icons-react';
import { Input, InputProps } from '@mantine/core';

interface CustomInputProps extends InputProps {
  icon?: React.ReactNode;
  placeholder?: string; // Ensure placeholder is included in CustomInputProps
}

const CustomInput = (props: CustomInputProps) => <Input {...props} />;

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">NEXTON eCommerce</h1>
        </div>
        <div className="flex items-center space-x-4">
          <CustomInput 
            icon={<IconSearch size={16} />} 
            placeholder="Search in products" 
            className="w-64" 
          />
          <nav className="flex items-center space-x-4">
            <Link href="/profile" className="flex items-center space-x-2">
              <IconUser size={16} />
              <span>Profile</span>
            </Link>
            <Link href="/ChekoutPage" className="flex items-center space-x-2">
              <IconShoppingCart size={16} />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
