// import { useEffect, useState } from 'react';
// import {
//   Navigate,
//   Route,
//   BrowserRouter as Router,
//   Routes,
// } from 'react-router-dom';

// import bookService from './services/books';

// import { Book } from './types';

// import AuthPage from './components/AuthPage';
// import BookListPage from './components/BookListPage';
// import BookPage from './components/BookPage';
// import ChatBot from './components/ChatBot/indexChat';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import StartPage from './components/StartPage';

// const App = () => {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [isAuthed, setIsAuthed] = useState<boolean>(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthed(true);
//       bookService.setToken(token);
//     } else {
//       setIsAuthed(false);
//     }
//   }, []);

//   //FIXME: No pagination
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const books = await bookService.getAll();
//         setBooks(books);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//         setBooks([]);
//       }
//     };
//     fetchBooks();
//   }, []);

//   return (
//     <Router>
//       <Header
//         isAuthed={isAuthed}
//         setIsAuthed={setIsAuthed}
//         books={books}
//         setBooks={setBooks}
//       />
//       <Routes>
//         <Route
//           path="/"
//           element={<Navigate to={isAuthed ? '/me' : '/start'} replace />}
//         />
//         <Route
//           path="/auth"
//           element={
//             !isAuthed ? (
//               <AuthPage setIsAuthed={setIsAuthed} />
//             ) : (
//               <Navigate to="/me" replace />
//             )
//           }
//         />
//         <Route
//           path="/book/:id"
//           element={<BookPage books={books} setBooks={setBooks} />}
//         />
//         <Route
//           path="/me"
//           element={
//             isAuthed ? (
//               <BookListPage books={books} setBooks={setBooks} />
//             ) : (
//               <Navigate to="/start" replace />
//             )
//           }
//         />
//         <Route
//           path="/start"
//           element={!isAuthed ? <StartPage /> : <Navigate to="/me" replace />}
//         />
//       </Routes>
//       <ChatBot isFooter={true} />
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import './index.css';
//import NxWelcome from './nx-welcome.js';
import bookService from './services/books.js';
import { Book } from './types.js';

import AuthPage from './components/AuthPage/index.js';
import BookListPage from './components/BookListPage/index.js';
import BookPage from './components/BookPage/index.js';
import ChatBot from './components/ChatBot/indexChat.js';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import StartPage from './components/StartPage/index.js';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthed(true);
      bookService.setToken(token);
    } else {
      setIsAuthed(false);
    }
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await bookService.getAll();
        console.log(books);
        setBooks(books);
      } catch (error) {
        console.error('Error fetching books:', error);
        setBooks([]);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Router>
        {/* Header with authentication and books state */}
        <Header
          isAuthed={isAuthed}
          setIsAuthed={setIsAuthed}
          books={books}
          setBooks={setBooks}
        />

        {/* <NxWelcome title="books-frontend" /> */}
        {/* Application routes */}
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuthed ? '/me' : '/start'} replace />}
          />
          <Route
            path="/auth"
            element={
              !isAuthed ? (
                <AuthPage setIsAuthed={setIsAuthed} />
              ) : (
                <Navigate to="/me" replace />
              )
            }
          />
          <Route
            path="/book/:id"
            element={<BookPage books={books} setBooks={setBooks} />}
          />
          <Route
            path="/me"
            element={
              isAuthed ? (
                <BookListPage books={books} setBooks={setBooks} />
              ) : (
                <Navigate to="/start" replace />
              )
            }
          />
          <Route
            path="/start"
            element={!isAuthed ? <StartPage /> : <Navigate to="/me" replace />}
          />
          Example additional route from Nx sample
          <Route
            path="/page-2"
            element={
              <div>
                This is the generated root route. <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>

        {/* Footer components */}
        <ChatBot isFooter={true} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
