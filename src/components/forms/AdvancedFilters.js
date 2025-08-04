import React, { memo, useState, useCallback, useMemo } from 'react';
import { Filter, Building, Settings, ChevronDown, Download } from 'lucide-react';
import { useTheme, useAppState } from '../../hooks/useContextHooks.js';

// Filtros Avançados Component - VERSÃO SUPER ORGANIZADA
export const AdvancedFilters = memo(({ onFiltersChange, filters, clearFilters, exportData, alunos = [] }) => {
  const { isDarkMode } = useTheme();
  const { unidades = [] } = useAppState(); // ✅ Fallback para array vazio
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = useCallback((key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  }, [filters, onFiltersChange]);

  // 🆕 Calcular estatísticas para os filtros - COM VERIFICAÇÃO DE SEGURANÇA
  const estatisticasFiltros = useMemo(() => {
    // ✅ Verificar se alunos existe e é array
    if (!alunos || !Array.isArray(alunos)) {
      return {
        vencidos: 0,
        vencendoEm7Dias: 0,
        mensalistas: 0,
        plataformas: 0,
        porUnidade: {}
      };
    }

    const hoje = new Date();
    
    const vencidos = alunos.filter(aluno => {
      if (!aluno || aluno.tipoPlano === 'plataforma') return false;
      const vencimento = new Date(aluno.vencimento);
      return vencimento < hoje;
    }).length;

    const vencendoEm7Dias = alunos.filter(aluno => {
      if (!aluno || aluno.tipoPlano === 'plataforma') return false;
      const vencimento = new Date(aluno.vencimento);
      const diffDias = Math.ceil((vencimento - hoje) / (1000 * 60 * 60 * 24));
      return diffDias <= 7 && diffDias >= 0;
    }).length;

    const porUnidade = unidades.reduce((acc, unidade) => {
      if (unidade && unidade.nome) {
        acc[unidade.nome] = alunos.filter(a => a && a.unidade === unidade.nome).length;
      }
      return acc;
    }, {});

    return {
      vencidos,
      vencendoEm7Dias,
      mensalistas: alunos.filter(a => a && a.tipoPlano === 'mensalidade').length,
      plataformas: alunos.filter(a => a && a.tipoPlano === 'plataforma').length,
      porUnidade
    };
  }, [alunos, unidades]);

  const activeFiltersCount = Object.values(filters || {}).filter(Boolean).length;

  // ✅ Se não tiver alunos, mostrar loading
  if (!alunos || !Array.isArray(alunos) || alunos.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
          <p className="text-gray-500 mt-4">Carregando filtros...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 🆕 Filtros Rápidos - Sempre Visíveis */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
          <Filter size={16} className="mr-2" />
          Filtros Rápidos
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {/* Todos */}
          <button
            onClick={() => clearFilters()}
            className={`p-3 rounded-lg text-center transition-all ${
              activeFiltersCount === 0
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold">{alunos.length}</div>
            <div className="text-xs">Todos</div>
          </button>

          {/* Ativos */}
          <button
            onClick={() => onFiltersChange({ status: 'ativo' })}
            className={`p-3 rounded-lg text-center transition-all ${
              filters.status === 'ativo'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold text-green-600">{alunos.filter(a => a && a.status === 'ativo').length}</div>
            <div className="text-xs">✅ Ativos</div>
          </button>

          {/* Mensalistas */}
          <button
            onClick={() => onFiltersChange({ tipoPlano: 'mensalidade' })}
            className={`p-3 rounded-lg text-center transition-all ${
              filters.tipoPlano === 'mensalidade'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold text-blue-600">{estatisticasFiltros.mensalistas}</div>
            <div className="text-xs">💰 Mensalistas</div>
          </button>

          {/* Plataformas */}
          <button
            onClick={() => onFiltersChange({ tipoPlano: 'plataforma' })}
            className={`p-3 rounded-lg text-center transition-all ${
              filters.tipoPlano === 'plataforma'
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold text-purple-600">{estatisticasFiltros.plataformas}</div>
            <div className="text-xs">🤝 Plataformas</div>
          </button>

          {/* Vencidos */}
          <button
            onClick={() => onFiltersChange({ vencimento: 'vencido' })}
            className={`p-3 rounded-lg text-center transition-all ${
              filters.vencimento === 'vencido'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold text-red-600">{estatisticasFiltros.vencidos}</div>
            <div className="text-xs">🚨 Vencidos</div>
          </button>

          {/* Vencendo */}
          <button
            onClick={() => onFiltersChange({ vencimento: 'vencendo' })}
            className={`p-3 rounded-lg text-center transition-all ${
              filters.vencimento === 'vencendo'
                ? 'bg-orange-600 text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <div className="text-lg font-bold text-orange-600">{estatisticasFiltros.vencendoEm7Dias}</div>
            <div className="text-xs">⚠️ Vencendo</div>
          </button>
        </div>
      </div>

      {/* 🆕 Filtros por Unidade */}
      {unidades.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center">
            <Building size={16} className="mr-2" />
            Filtrar por Unidade
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {unidades.map(unidade => (
              <button
                key={unidade.id}
                onClick={() => handleFilterChange('unidade', filters.unidade === unidade.nome ? '' : unidade.nome)}
                className={`p-3 rounded-lg text-center transition-all ${
                  filters.unidade === unidade.nome
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-lg font-bold text-indigo-600">{estatisticasFiltros.porUnidade[unidade.nome] || 0}</div>
                <div className="text-xs">{unidade.nome}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 🆕 Filtros Avançados (Expansível) */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-xl transition-colors"
        >
          <div className="flex items-center">
            <Settings size={16} className="mr-2" />
            <span className="font-semibold">Filtros Avançados</span>
            {activeFiltersCount > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </div>
          <ChevronDown 
            size={20} 
            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isOpen && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Status do Aluno
                </label>
                <select
                  value={filters.status || ''}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todos os status</option>
                  <option value="ativo">✅ Ativo</option>
                  <option value="pendente">⏳ Pendente</option>
                  <option value="inativo">❌ Inativo</option>
                </select>
              </div>

              {/* Tipo de Plano */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Tipo de Plano
                </label>
                <select
                  value={filters.tipoPlano || ''}
                  onChange={(e) => handleFilterChange('tipoPlano', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todos os tipos</option>
                  <option value="mensalidade">💰 Mensalidade</option>
                  <option value="plataforma">🤝 Plataforma Parceira</option>
                </select>
              </div>

              {/* Nível */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Nível do Aluno
                </label>
                <select
                  value={filters.nivel || ''}
                  onChange={(e) => handleFilterChange('nivel', e.target.value)}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Todos os níveis</option>
                  <option value="iniciante">🟢 Iniciante</option>
                  <option value="intermediario">🟡 Intermediário</option>
                  <option value="avancado">🔴 Avançado</option>
                </select>
              </div>
            </div>

            {/* 🆕 Filtros de Data de Vencimento */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                📅 Situação de Vencimento
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <button
                  onClick={() => handleFilterChange('vencimento', filters.vencimento === 'vencido' ? '' : 'vencido')}
                  className={`p-3 rounded-lg text-center transition-all ${
                    filters.vencimento === 'vencido'
                      ? 'bg-red-600 text-white'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30'
                  }`}
                >
                  <div className="font-bold">🚨 Vencidos</div>
                  <div className="text-xs">Pagamento em atraso</div>
                </button>

                <button
                  onClick={() => handleFilterChange('vencimento', filters.vencimento === 'vencendo' ? '' : 'vencendo')}
                  className={`p-3 rounded-lg text-center transition-all ${
                    filters.vencimento === 'vencendo'
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/30'
                  }`}
                >
                  <div className="font-bold">⚠️ Vencendo</div>
                  <div className="text-xs">Próximos 7 dias</div>
                </button>

                <button
                  onClick={() => handleFilterChange('vencimento', filters.vencimento === 'ok' ? '' : 'ok')}
                  className={`p-3 rounded-lg text-center transition-all ${
                    filters.vencimento === 'ok'
                      ? 'bg-green-600 text-white'
                      : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                  }`}
                >
                  <div className="font-bold">✅ Em dia</div>
                  <div className="text-xs">Vencimento OK</div>
                </button>

                <button
                  onClick={() => handleFilterChange('vencimento', filters.vencimento === 'sem-vencimento' ? '' : 'sem-vencimento')}
                  className={`p-3 rounded-lg text-center transition-all ${
                    filters.vencimento === 'sem-vencimento'
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                  }`}
                >
                  <div className="font-bold">🤝 Plataformas</div>
                  <div className="text-xs">Sem vencimento</div>
                </button>
              </div>
            </div>

            {/* Ações */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                🗑️ Limpar todos os filtros
              </button>
              
              <button
                onClick={exportData}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                Exportar Filtrados
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});