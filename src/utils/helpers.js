import { toast } from './toast.js';

// ===============================
// UTILITÁRIOS E HELPERS
// ===============================
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const convertToCSV = (data) => {
  if (!data.length) return '';
  
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => 
    Object.values(row).map(value => 
      typeof value === 'string' && value.includes(',') ? `"${value}"` : value
    ).join(',')
  );
  
  return [headers, ...rows].join('\n');
};

export const exportToCSV = (data, filename) => {
  try {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast.success('Dados exportados com sucesso!');
  } catch (error) {
    console.error('Erro ao exportar:', error);
    toast.error('Erro ao exportar dados');
  }
};