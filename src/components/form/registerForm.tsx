import { useForm, zodResolver } from '@mantine/form';
import { Input, Button, Box, Text } from '@mantine/core';
import Link from 'next/link';
import { registerSchema } from '../../../schemas/registerSchema';

export default function RegisterForm() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(registerSchema),
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Box mb="4">
        <Input
          label="Email"
          placeholder="example@example.com"
          {...form.getInputProps('email')}
        />
      </Box>
      <Box mb="4">
        <Input
          label="Password"
          placeholder="Your password"
          type="password"
          {...form.getInputProps('password')}
        />
      </Box>
      <Box mb="4">
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          {...form.getInputProps('confirmPassword')}
        />
      </Box>
      <Button type="submit" fullWidth className="bg-blue-600 text-white mb-4">
        Continue
      </Button>
      <Text align="center">OR</Text>
      <Text align="center" mt="4">
        Already a member? <Link href="/login">Login</Link>
      </Text>
    </form>
  );
}
