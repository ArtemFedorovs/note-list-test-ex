import React from 'react';
import {render, screen, fireEvent} from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


describe('Main test', function(): void {   
  it('render', function() { 
    renderComponent();
    expect(screen.getByText("Список заметок")).toBeInTheDocument;
  }); 

  it('open/close Modal', function() { 
    renderComponent();
    fireEvent.click(screen.getByText("Добавить"));
    expect(screen.getByText("Добавить заметку")).toBeInTheDocument;
    fireEvent.click(screen.getByText("Отмена"));
    expect(screen.queryByText("Добавить заметку")).not.toBeInTheDocument;
  }); 

  it('add and delete notes', function() { 
      renderComponent();
      fireEvent.click(screen.getByText("Добавить"));
      expect(screen.getByText("Добавить заметку")).toBeInTheDocument;   
      fireEvent.change(screen.getByTestId("textarea"), {target: { value: 'Первая запись' }})
      fireEvent.click(screen.getByText("Ок"));
      fireEvent.change(screen.getByTestId("textarea"), {target: { value: 'Многострочная\bзапись' }})
      fireEvent.click(screen.getByText("Ок"));
      fireEvent.click(screen.getByText("×"));
      expect(screen.queryByText("Добавить заметку")).not.toBeInTheDocument;
      expect(screen.getByText("Первая запись")).toBeInTheDocument;
      expect(screen.getByText("Многострочная\bзапись")).toBeInTheDocument;
      fireEvent.click(screen.getByText("Первая запись") );
      fireEvent.click(screen.getByText("Удалить"));
      expect(screen.queryByText('Первая запись')).not.toBeInTheDocument;
    });
});

function renderComponent() {
return render(
  <Provider store={store}>
    <App/> 
  </Provider>       
)
}