import { useMemo } from 'react';

// Hook para filtros avançados - VERSÃO MELHORADA
export const useAdvancedFilter = (data, filters) => {
  return useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    
    return data.filter(item => {
      // Filtro por texto (nome/email)
      if (filters.nome && !item.nome.toLowerCase().includes(filters.nome.toLowerCase()) && 
          !item.email.toLowerCase().includes(filters.nome.toLowerCase())) {
        return false;
      }

      // Filtro por status
      if (filters.status && item.status !== filters.status) {
        return false;
      }

      // Filtro por tipo de plano
      if (filters.tipoPlano && item.tipoPlano !== filters.tipoPlano) {
        return false;
      }

      // Filtro por unidade
      if (filters.unidade && item.unidade !== filters.unidade) {
        return false;
      }

      // Filtro por nível
      if (filters.nivel && item.nivel !== filters.nivel) {
        return false;
      }

      // 🆕 Filtro por situação de vencimento
      if (filters.vencimento) {
        const hoje = new Date();
        
        if (filters.vencimento === 'vencido') {
          if (item.tipoPlano === 'plataforma') return false;
          const vencimento = new Date(item.vencimento);
          if (vencimento >= hoje) return false;
        }
        
        if (filters.vencimento === 'vencendo') {
          if (item.tipoPlano === 'plataforma') return false;
          const vencimento = new Date(item.vencimento);
          const diffDias = Math.ceil((vencimento - hoje) / (1000 * 60 * 60 * 24));
          if (diffDias > 7 || diffDias < 0) return false;
        }
        
        if (filters.vencimento === 'ok') {
          if (item.tipoPlano === 'plataforma') return false;
          const vencimento = new Date(item.vencimento);
          const diffDias = Math.ceil((vencimento - hoje) / (1000 * 60 * 60 * 24));
          if (diffDias <= 7) return false;
        }
        
        if (filters.vencimento === 'sem-vencimento') {
          if (item.tipoPlano !== 'plataforma') return false;
        }
      }

      return true;
    });
  }, [data, filters]);
};