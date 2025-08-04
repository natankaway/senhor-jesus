import { useMemo } from 'react';
import { useUnitAccess } from './useUnitAccess.js';

// 🆕 Hook para filtrar dados por unidade automaticamente
export const useUnitFilteredData = (data, dataType = 'default') => {
  const { hasFullAccess, currentUnit } = useUnitAccess();
  
  return useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    
    // Admin vê todos os dados
    if (hasFullAccess) {
      return data;
    }
    
    // Gestor e outros veem apenas dados da sua unidade
    if (currentUnit) {
      return data.filter(item => {
        // Para diferentes tipos de dados, verificar o campo correto
        switch (dataType) {
          case 'alunos':
            return item.unidade === currentUnit;
          case 'professores':
            return item.unidade === currentUnit || !item.unidade; // Professores podem não ter unidade específica
          case 'planos':
            return item.unidade === currentUnit;
          case 'financeiro':
            return item.unidade === currentUnit || !item.unidade; // Transações podem ser gerais
          case 'presencas':
            // Para presenças, verificar se o aluno pertence à unidade
            return true; // Por enquanto, deixar passar - será refinado quando integrar com dados de alunos
          default:
            return item.unidade === currentUnit || !item.unidade;
        }
      });
    }
    
    return data;
  }, [data, hasFullAccess, currentUnit, dataType]);
};