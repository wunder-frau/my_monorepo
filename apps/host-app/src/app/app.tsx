import React, { Suspense } from 'react';
import NxWelcome from './nx-welcome';
//import BooksFrontend from 'books-frontend/App';

//const BooksFrontend = React.lazy(() => import('books-frontend/App')); // ✅ Dynamic import of books_frontend
// const BooksFrontend = React.lazy(async () => {
//   const component = await import('books-frontend/App');
//   console.log('Loaded component:', component);
//   return component;
// });
const BooksFrontend = React.lazy(() => import('books-frontend/App'));
const RemoteComponent = React.lazy(() => import('my-remote-app/App')); // ✅ Ensure remote name is correct

export function App() {
  return (
    <div>
      <NxWelcome title="HOST-app" />
      <Suspense fallback={<>Loading books-frontend...</>}>
        <BooksFrontend />
      </Suspense>
      <Suspense fallback={<>Loading remote app...</>}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
}

export default App;

// import React, { Suspense } from 'react';
// import NxWelcome from './nx-welcome';

// const BooksFrontend = React.lazy(() => import('books_frontend/App'));

// export function App() {
//   return (
//     <div>
//       <NxWelcome title="HOST-app" />
//       <Suspense fallback={<p>Loading books-frontend...</p>}>
//         <BooksFrontend />
//       </Suspense>
//     </div>
//   );
// }

// export default App;
