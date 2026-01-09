import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import './sistema.css';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcula Fácil v2 - Sistema de Cálculos',
  description: 'Sistema profissional para cálculos aeronáuticos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopBar />
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
