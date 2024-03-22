import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de usuario de repuesto.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de seguimiento de errores
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes personalizar este mensaje de error según tus necesidades
      return <div>¡Oops! Algo salió mal. Por favor, intenta nuevamente más tarde.</div>;
    }

    // Si no hay errores, renderiza los componentes hijos normalmente
    return this.props.children;
  }
}

export default ErrorBoundary;