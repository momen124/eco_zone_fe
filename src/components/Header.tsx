import { Input } from '@mantine/core';
import { IconSearch, IconUser, IconShoppingCart } from '@tabler/icons-react';

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">EcoZone eCommerce</h1>
        </div>
        <div className="flex-1 mx-4">
          <Input
            icon={<IconSearch size={16} />}
            placeholder="Search in products..."
            className="w-full"
          />
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2">
            <IconUser size={16} />
            <span>Account</span>
          </button>
          <button className="flex items-center space-x-2">
            <IconShoppingCart size={16} />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
