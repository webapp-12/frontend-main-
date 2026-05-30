import Link from "next/link";

import SocialLoginButton from "../../../../components/auth/social-login-button";
import { enabledAuthProviders } from "../../../../lib/auth";

export default async function LoginPage({ params }) {
  const { locale } = await params;
  const callbackUrl = `/${locale}/Home`;
  const hasAnySocialProvider =
    enabledAuthProviders.facebook || enabledAuthProviders.google;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fff8dc_0%,#f5efe1_45%,#ebe2d1_100%)] px-6 py-16">
      <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(135deg,rgba(173,94,29,0.22),transparent_55%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-5xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_24px_80px_rgba(89,54,24,0.18)] backdrop-blur md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between bg-[linear-gradient(145deg,#5a2d0c,#a55b1f_58%,#d6a35d)] p-8 text-white md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                Cartly Commerce
              </p>
              <h1 className="mt-6 max-w-sm text-4xl font-semibold leading-tight">
                Welcome back to your storefront.
              </h1>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                Sign in with Facebook or Google to manage orders, products, and
                customers in the {` ${locale.toUpperCase()} `}workspace.
              </p>
            </div>
            <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="text-sm font-medium text-white/85">
                Fast access, no password reset loops.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                We&apos;ll send you through a secure social sign-in flow and
                bring you right back to the app.
              </p>
            </div>
          </div>

          <div className="flex items-center p-8 md:p-10">
            <div className="w-full">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-900">
                Login
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-neutral-950">
                Choose a sign-in method
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Use Facebook or Google to sign in. New users can finish setting
                up their profile after authentication.
              </p>

              <div className="mt-8 space-y-3">
                {enabledAuthProviders.facebook ? (
                  <SocialLoginButton
                    provider="facebook"
                    callbackUrl={callbackUrl}
                  />
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#1877F2]/35 bg-[#1877F2]/6 px-5 py-4 text-sm text-neutral-700">
                    <p className="font-semibold text-neutral-900">
                      Facebook login is not enabled yet
                    </p>
                    <p className="mt-1 leading-6">
                      Add <code>FACEBOOK_CLIENT_ID</code> and{" "}
                      <code>FACEBOOK_CLIENT_SECRET</code> in{" "}
                      <code>.env.local</code> to turn it on.
                    </p>
                  </div>
                )}
                <SocialLoginButton
                  provider="google"
                  callbackUrl={callbackUrl}
                  disabled={!enabledAuthProviders.google}
                  disabledLabel="Add Google app keys to enable this"
                />
              </div>

              {!hasAnySocialProvider ? (
                <p className="mt-4 text-sm leading-6 text-amber-700">
                  No social sign-in providers are configured yet. Add provider
                  keys in <code>.env.local</code> to enable login.
                </p>
              ) : null}

              <p className="mt-6 text-sm text-neutral-600">
                Don&apos;t have an account yet?{" "}
                <Link
                  href={`/${locale}/signup`}
                  className="font-semibold text-neutral-950 underline decoration-amber-400 decoration-2 underline-offset-4"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
