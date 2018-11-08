// Super simple menu
// Elements are arranged with flex box
// I'm not great with design.

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.scss';

export default class Menu extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {name: "Cube"},
        {name: "Sphere"}
      ],
      onButtonClick: props.onButtonClick
    }
  }

  public render() {
    const { items, onButtonClick } = this.state;

    const menu__buttons = items.map( element => {
        return (
          <button
            key={element.name}
            className="menu__item"
            onClick={
              (event: Event) => onButtonClick(element.name)
            }
          > {element.name} </button>)
    })

    return (
      <div className="menu__container"> { menu__buttons } </div>
    );
  }
}
