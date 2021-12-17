import React from "react";
import { useAuth } from "./context/auth-context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
import "./App.css";
import { ErrorBoundary } from "./components/error-boundary";
import { FullPageErrorFallback } from "components/lib";
// import Home from "./page/home/Home"
// import {TsReactTest} from "./page/tsReactTest/TsReactTest";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      {/*<Home />*/}
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
      {/*<TsReactTest/>*/}
    </div>
  );
}

export default App;
