/* eslint-disable react/react-in-jsx-scope */
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Session, User} from '@supabase/supabase-js';
import {supabase} from '../lib/supabase';

type AuthData = {
  session: Session | null;
  loading: boolean;
  user: User | null;
  profile: any | null;
  channel: any | null;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: false,
  user: null,
  profile: null,
  channel: null,
});

export function AuthProvider({children}: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [channel, setChannel] = useState(null);
  const [profile, setProfile] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: {session},
      } = await supabase.auth.getSession();
      setSession(session);

      setLoading(false);
    };

    fetchSession();
  }, []);
  // console.log("session:", session)

  // if (!session) {
  //   return;
  // }

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        user: session?.user,
        profile,
        channel,
        setChannel,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => useContext(AuthContext);
