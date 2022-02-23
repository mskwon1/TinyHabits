import { useSession } from 'next-auth/react';

export default function Home(): JSX.Element {
  const { data: session } = useSession();

  return (
    <>
      <div>Hello World</div>
      {session && <div>LOGGED IN : {session.user.email}</div>}
    </>
  );
}
