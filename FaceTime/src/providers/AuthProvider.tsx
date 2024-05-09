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
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: false,
  user: null,
  profile: null,
});

export function AuthProvider({children}: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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

    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    const fetchProfile = async () => {
      let {data, error} = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!session) {
    return;
  }

  return (
    <AuthContext.Provider
      value={{session, loading, user: session?.user, profile}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthProvider = () => useContext(AuthContext);
