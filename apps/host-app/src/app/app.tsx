import React, { Suspense } from 'react';
const BooksFrontend = React.lazy(() => import('books-frontend/App'));
//const RemoteComponent = React.lazy(() => import('my-remote-app/App'));

export function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-2xl font-bold text-center text-blue-600">
        Welcome to the Host App 🚀
      </h1>
      {/* <NxWelcome title="HOST-app" /> */}
      <Suspense fallback={<>Loading books-frontend...</>}>
        <BooksFrontend />
      </Suspense>
      {/* <Suspense fallback={<>Loading remote app...</>}>
        <RemoteComponent />
      </Suspense> */}
    </div>
  );
}

export default App;
