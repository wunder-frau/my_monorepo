import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const BooksFrontend = React.lazy(() => import('books-frontend/App'));
const RemoteApp = React.lazy(() => import('my-remote-app/App'));

export function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen p-5">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          <span role="img" aria-label="rocket">
            Welcome to the Host App 🚀
          </span>
        </h1>

        <nav className="flex justify-center space-x-4 my-4">
          <Link to="/start" className="p-2 bg-blue-500 text-white rounded">
            Books Frontend
          </Link>
          <Link to="/remote" className="p-2 bg-green-500 text-white rounded">
            My Remote App
          </Link>
        </nav>

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/*" element={<BooksFrontend />} />{' '}
            <Route path="/remote" element={<RemoteApp />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
