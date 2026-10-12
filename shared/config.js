// Public client config for the Brainpath web pages. Safe to publish: the publishable key can only
// do what RLS and the function grants allow. Never put a secret / service role key or any Stripe
// secret here.
// Brainpath's backend lives inside the RightSteps Supabase project (jkdaukqdbzslvcasvzxo); its
// functions are bp-pay / bp-manage / bp-restore / bp-stripe-webhook and its RPCs bp_*.
window.BP_CONFIG = {
  url: 'https://jkdaukqdbzslvcasvzxo.supabase.co',
  key: 'sb_publishable_WJurDMhkgkIoFdoM1w7dFA_tuC3XJSn',
};
