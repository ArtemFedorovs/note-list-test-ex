import React from 'react';
import {render, screen} from "@testing-library/react";
import {AddButton} from "./AddButton";
import { Provider } from 'react-redux';
import { store } from '../../app/store';


describe('About', function(): void {    
        it('renders', function() { 
            renderComponent();
            expect(screen.getByText("Добавить")).toBeInTheDocument;
    });
  });

  function renderComponent() {
    return render(
        <Provider store={store}>
          <AddButton/> 
        </Provider>       
    )
  }