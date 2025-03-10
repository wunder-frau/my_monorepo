import React from 'react';

declare module 'my-remote-app/App' {
  const AppComponent: React.FC;
  export default AppComponent;
}

declare module 'books-frontend/App' {
  const BooksFrontend: React.FC;
  export default BooksFrontend;
}
