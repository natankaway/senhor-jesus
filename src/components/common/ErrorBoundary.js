import React from 'react';
import { AlertCircle } from 'lucide-react';
import { toast } from '../utils/toast.js';

// ===============================
// ERROR BOUNDARY
// ===============================
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado pelo Error Boundary:', error, errorInfo);
    toast.error('Ocorreu um erro inesperado. A página será recarregada.');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Ops! Algo deu errado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ocorreu um erro inesperado. Tente recarregar a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}