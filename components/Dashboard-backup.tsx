// Arquivo corrigido - adiciona tipos TypeScript
export default function Dashboard() {
  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      ativo: 'bg-green-100 text-green-800',
      pendente: 'bg-yellow-100 text-yellow-800',
      bloqueado: 'bg-red-100 text-red-800',
    };
    
    const text: Record<string, string> = {
      ativo: 'Ativo',
      pendente: 'Pendente',
      bloqueado: 'Bloqueado',
    };
    
    return <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>{text[status]}</span>;
  };

  return (
    <div>
      {/* Seu conteúdo do Dashboard */}
      <div>Dashboard Component</div>
    </div>
  );
}
