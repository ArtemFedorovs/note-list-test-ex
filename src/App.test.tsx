import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("Добавить")).toBeInTheDocument();
});

// import React from 'react';
// import {render, screen} from "@testing-library/react";
// import {AddButton} from "./AddButton";


// describe('About', function(): void {    
//         it('renders', function() { 
//             renderComponent();
//             expect(screen.getByText("Добавить")).toBeInTheDocument;
//     });
//   });

//   function renderComponent() {
//     return render(
//             <AddButton/> 
//     )
//   }