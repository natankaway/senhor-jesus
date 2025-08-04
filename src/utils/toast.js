// Simulando react-hot-toast para o exemplo
export const toast = {
  success: (message) => console.log('✅ SUCCESS:', message),
  error: (message) => console.log('❌ ERROR:', message),
  warn: (message) => console.log('⚠️ WARNING:', message),
  promise: (promise, options) => promise
};

export const Toaster = () => null; // Placeholder