import * as React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 text-2xl font-medium">
          {this.props.fallback}
          <div className="mt-4 rounded-2xl border-2 border-rose-200 p-4 text-sm">
            <div className="mb-2 text-[16px]">
              Error: <span className="px-2">{String(this.state.error)}</span>
            </div>
            <div>
              <span className="text-[16px]">Info:</span>
              <pre className="px-2 whitespace-pre-wrap">
                {this.state.info?.componentStack}
              </pre>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
