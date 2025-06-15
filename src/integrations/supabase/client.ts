

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sspbrxjuelqsinumqade.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzcGJyeGp1ZWxxc2ludW1xYWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMzEyMTksImV4cCI6MjA1NjYwNzIxOX0.qMOn4kpLqSQZzOz84ujlu8XWJMypMyE1FbtWzKt7Fb8";



export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
