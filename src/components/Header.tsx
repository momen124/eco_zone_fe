import type { InputProps } from '@mantine/core';
import { Input } from '@mantine/core';
import { IconSearch, IconShoppingCart, IconUser } from '@tabler/icons-react';
import Link from 'next/link';

interface CustomInputProps extends InputProps {
  icon?: React.ReactNode;
  placeholder?: string; // Ensure placeholder is included in CustomInputProps
}

const CustomInput = (props: CustomInputProps) => <Input {...props} />;

export default function Header() {
  return (
    <header className="border-header-background border-b py-4 bg-header-background">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-header-logo">EcoZone eCommerce</h1>
        </div>
        <div className="flex items-center space-x-4">
          <CustomInput 
            icon={<IconSearch size={16} />} 
            placeholder="Search in products" 
            className="w-64" 
          />
          <nav className="flex items-center space-x-4">
            <Link href="/profile" className="text-header-items hover:text-header-items-hover">
              <IconUser size={16} />
              <span>Profile</span>
            </Link>
            <Link href="/cart" className="text-header-items hover:text-header-items-hover">
              <IconShoppingCart size={16} />
              <span>Cart</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
