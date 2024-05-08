import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://cjkeusktocnjigbrwblv.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2V1c2t0b2NuamlnYnJ3Ymx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4MjU4NjUsImV4cCI6MjAzMDQwMTg2NX0.PO1bRQ7FS92U0Fi9UKIVAUAxbXKHogMMVn7DmCLUVMQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
