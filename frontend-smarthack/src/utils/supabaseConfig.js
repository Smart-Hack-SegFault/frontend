import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ygvankelmtmuelmidwjm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndmFua2VsbXRtdWVsbWlkd2ptIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTIyMTc3MywiZXhwIjoyMDE0Nzk3NzczfQ.0VZ9vVTAZrUGY-3UeFwFEuplDsbnyjm6bA17rzBtEcA'
)
