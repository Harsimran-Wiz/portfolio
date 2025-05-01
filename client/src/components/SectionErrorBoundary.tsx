import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  sectionName: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class SectionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(
      `Error in ${this.props.sectionName} section:`,
      error,
      errorInfo
    );
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <div className="inline-block p-6 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--primary)_/_0.1)]">
            <h3 className="text-lg font-semibold text-[hsl(var(--primary))]">
              {this.props.sectionName} Section Error
            </h3>
            <p className="mt-2 text-[hsl(var(--muted-foreground))]">
              This section encountered an error and couldn't be loaded.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 px-4 py-2 rounded-md bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)_/_0.9)] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;
