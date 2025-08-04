import React, { memo, useEffect } from 'react';
import { Search, X, Download } from 'lucide-react';
import { useDebouncedSearch } from '../../hooks/useDebouncedSearch.js';
import { Input } from './Input.js';
import { Button } from '../common/Button.js';
import { AdvancedFilters } from './AdvancedFilters.js';

// Componente de Busca Melhorado - VERSÃO CORRIGIDA
export const SearchBar = memo(({ searchTerm, onSearchChange, placeholder = "Buscar...", filters = {}, onFiltersChange, clearFilters, exportData, alunos = [] }) => {
  const debouncedSearchTerm = useDebouncedSearch(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) {
      onSearchChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchTerm, onSearchChange]);

  return (
    <div className="flex flex-col gap-4">
      {/* Barra de busca */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="search"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
            aria-label={placeholder}
          />
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={clearFilters}
            leftIcon={<X size={16} />}
          >
            Limpar
          </Button>
          <Button
            variant="success"
            onClick={exportData}
            leftIcon={<Download size={16} />}
          >
            Exportar
          </Button>
        </div>
      </div>
      
      {/* Filtros Avançados */}
      <AdvancedFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
        clearFilters={clearFilters}
        exportData={exportData}
        alunos={alunos}
      />
    </div>
  );
});