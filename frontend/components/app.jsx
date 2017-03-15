import React from 'react';
import HeaderContainer from './header/header_container';
import ModalContainer from './modal/modal_container';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <main>
      {children}
    </main>
    <ModalContainer />
  </div>
);

export default App;
