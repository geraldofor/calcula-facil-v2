export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/' },
    { name: 'Tarifas', icon: '💰', href: '/sistema/tarifas' },
    { name: 'Conversor', icon: '🔄', href: '/sistema/conversor' },
    { name: 'Reemissão', icon: '✈️', href: '/sistema/reemissao' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">🧮 Calcula Fácil</h1>
        <p className="text-gray-400 text-sm mt-1">v2.0</p>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
