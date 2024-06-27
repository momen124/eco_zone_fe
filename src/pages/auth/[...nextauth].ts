import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Mock database function to get user by email
const getUserByEmail = async (email?: string) => {
  // Mock user data
  const users = [
    { id: '1', name: 'Momen', email: 'momen@gmail.com', password: '123456' },
    // Add more users as needed
  ];
  return users.find(user => user.email === email);
};

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        username: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.username;
        const password = credentials?.password;

        // Fetch the user by email
        const user = await getUserByEmail(email);

        // If no user found or password doesn't match, throw an error
        if (!user || user.password !== password) {
          throw new Error('Invalid email or password');
        }

        // If all is good, return the user object
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
