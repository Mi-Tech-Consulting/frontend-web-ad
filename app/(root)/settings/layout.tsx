// NOTE: maybe change this to show more details
// export const metadata = {
//   title: 'Welcome to Mitech Recruitment',
//   description:
//     'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
// };

import Sidebar from './_Componenets/Sidebar';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#EBEDF0] h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
