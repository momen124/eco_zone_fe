import Footer from '@/components/Footer'
import Header from '@/components/Header'
import useSignIn from '@/hooks/auth/useSignin'
import { Button, Text } from '@mantine/core'

export default function Index() {
  const { signIn, isLoading } = useSignIn()

  const credentials = { email: "test@app.com", password: "password" }

  return (
    <>
    <Header />

    <div className='text-center flex flex-col items-center justify-center gap-8 mx-8 my-4 h-[calc(70vh)]'>
      <Text className='text-red-500 text-xl font-bold'>⚠️ Add login form here... ⚠️</Text>

      <Text className='text-ce'>currently signing in automatically using the following credentials 👇👇👇👇</Text>

      {JSON.stringify(credentials)}

      <Button loading={isLoading} onClick={() => signIn(credentials)}>Login</Button>
    </div>

    <Footer />
    </>
  )
}
