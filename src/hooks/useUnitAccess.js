import { useMemo } from 'react';
import { useAppState } from './useContextHooks.js';

// 🆕 Hook para controle de acesso baseado em unidade
export const useUnitAccess = () => {
  const { userLogado, tipoUsuario } = useAppState();
  
  return useMemo(() => {
    // Admin tem acesso a todas as unidades
    if (tipoUsuario === 'admin') {
      return {
        hasFullAccess: true,
        allowedUnits: ['Centro', 'Zona Sul', 'Zona Norte', 'Barra'],
        currentUnit: null,
        isGestor: false
      };
    }
    
    // Gestor só tem acesso à sua unidade
    if (tipoUsuario === 'gestor' && userLogado?.unidadeResponsavel) {
      return {
        hasFullAccess: false,
        allowedUnits: [userLogado.unidadeResponsavel],
        currentUnit: userLogado.unidadeResponsavel,
        isGestor: true
      };
    }
    
    // Outros usuários (professor, aluno) têm acesso limitado
    return {
      hasFullAccess: false,
      allowedUnits: userLogado?.unidade ? [userLogado.unidade] : [],
      currentUnit: userLogado?.unidade || null,
      isGestor: false
    };
  }, [userLogado, tipoUsuario]);
};