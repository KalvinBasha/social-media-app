import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import "./globals.css";
import { db } from "@/lib/db";
import ProfileForm from "./components/ProfileForm";

export default async function RootLayout({ children }) {
  const { userId } = auth();

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = ${userId}`
  );

  if (profiles.rowCount === 0 && userId !== null) {
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }

  const hasUsername = profiles.rows[0]?.username !== null ? true : false;

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
              <p>This p tag will show when you are signed out</p>
            </SignedOut>

            <SignedIn>
              <UserButton />
              <p>This p tag will show when you are signed in</p>
            </SignedIn>
          </header>
          <main>
            <SignedOut>{children}</SignedOut>

            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
