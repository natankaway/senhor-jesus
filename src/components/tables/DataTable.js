import React, { memo } from 'react';
import { useTheme } from '../../hooks/useContextHooks.js';
import { usePagination } from '../../hooks/usePagination.js';
import { LoadingSpinner } from '../common/LoadingSpinner.js';
import { Button } from '../common/Button.js';

// Tabela melhorada com paginação e acessibilidade
export const DataTable = memo(({ 
  data, 
  columns, 
  loading = false,
  emptyMessage = "Nenhum dado encontrado",
  pagination = true,
  itemsPerPage = 10 
}) => {
  const { isDarkMode } = useTheme();
  const {
    currentData,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    hasNext,
    hasPrev
  } = usePagination(data, itemsPerPage);

  if (loading) {
    return <LoadingSpinner text="Carregando dados..." />;
  }

  if (!data.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="min-w-full" role="table" aria-label="Tabela de dados">
          <thead className="bg-gray-50 dark:bg-gray-800/50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key || index}
                  className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  scope="col"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {currentData.map((row, rowIndex) => (
              <tr 
                key={row.id || rowIndex} 
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {columns.map((column, colIndex) => (
                  <td key={column.key || colIndex} className="px-6 py-4 whitespace-nowrap">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Mostrando {(currentPage - 1) * itemsPerPage + 1} até {Math.min(currentPage * itemsPerPage, data.length)} de {data.length} resultados
          </p>
          
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={prevPage}
              disabled={!hasPrev}
              aria-label="Página anterior"
            >
              Anterior
            </Button>
            
            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 text-sm rounded ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                    aria-label={`Ir para página ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            
            <Button
              size="sm"
              variant="secondary"
              onClick={nextPage}
              disabled={!hasNext}
              aria-label="Próxima página"
            >
              Próxima
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});