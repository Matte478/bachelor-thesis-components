/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface ObdButton {
    'block': boolean;
    'type': string;
  }
  interface ObdButtonArrow {
    'right': boolean;
  }
  interface ObdCard {
    'cardSubtitle': string;
    'cardTitle': string;
  }
  interface ObdModal {
    'active': boolean;
    'modalSubtitle': string;
    'modalTitle': string;
  }
  interface ObdPageNotFound {
    'emoji': string;
    'message': string;
    'status': string;
  }
  interface ObdScroll {
    'target': string;
  }
  interface ObdTable {
    'actions': string;
    'columns': string;
    'data': string;
    'layout': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLObdButtonElement extends Components.ObdButton, HTMLStencilElement {}
  var HTMLObdButtonElement: {
    prototype: HTMLObdButtonElement;
    new (): HTMLObdButtonElement;
  };

  interface HTMLObdButtonArrowElement extends Components.ObdButtonArrow, HTMLStencilElement {}
  var HTMLObdButtonArrowElement: {
    prototype: HTMLObdButtonArrowElement;
    new (): HTMLObdButtonArrowElement;
  };

  interface HTMLObdCardElement extends Components.ObdCard, HTMLStencilElement {}
  var HTMLObdCardElement: {
    prototype: HTMLObdCardElement;
    new (): HTMLObdCardElement;
  };

  interface HTMLObdModalElement extends Components.ObdModal, HTMLStencilElement {}
  var HTMLObdModalElement: {
    prototype: HTMLObdModalElement;
    new (): HTMLObdModalElement;
  };

  interface HTMLObdPageNotFoundElement extends Components.ObdPageNotFound, HTMLStencilElement {}
  var HTMLObdPageNotFoundElement: {
    prototype: HTMLObdPageNotFoundElement;
    new (): HTMLObdPageNotFoundElement;
  };

  interface HTMLObdScrollElement extends Components.ObdScroll, HTMLStencilElement {}
  var HTMLObdScrollElement: {
    prototype: HTMLObdScrollElement;
    new (): HTMLObdScrollElement;
  };

  interface HTMLObdTableElement extends Components.ObdTable, HTMLStencilElement {}
  var HTMLObdTableElement: {
    prototype: HTMLObdTableElement;
    new (): HTMLObdTableElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'obd-button': HTMLObdButtonElement;
    'obd-button-arrow': HTMLObdButtonArrowElement;
    'obd-card': HTMLObdCardElement;
    'obd-modal': HTMLObdModalElement;
    'obd-page-not-found': HTMLObdPageNotFoundElement;
    'obd-scroll': HTMLObdScrollElement;
    'obd-table': HTMLObdTableElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface ObdButton {
    'block'?: boolean;
    'type'?: string;
  }
  interface ObdButtonArrow {
    'right'?: boolean;
  }
  interface ObdCard {
    'cardSubtitle'?: string;
    'cardTitle'?: string;
  }
  interface ObdModal {
    'active'?: boolean;
    'modalSubtitle'?: string;
    'modalTitle'?: string;
    'onClosed'?: (event: CustomEvent<any>) => void;
  }
  interface ObdPageNotFound {
    'emoji'?: string;
    'message'?: string;
    'status'?: string;
  }
  interface ObdScroll {
    'target'?: string;
  }
  interface ObdTable {
    'actions'?: string;
    'columns'?: string;
    'data'?: string;
    'layout'?: string;
    'onAction'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'obd-button': ObdButton;
    'obd-button-arrow': ObdButtonArrow;
    'obd-card': ObdCard;
    'obd-modal': ObdModal;
    'obd-page-not-found': ObdPageNotFound;
    'obd-scroll': ObdScroll;
    'obd-table': ObdTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'obd-button': LocalJSX.ObdButton & JSXBase.HTMLAttributes<HTMLObdButtonElement>;
      'obd-button-arrow': LocalJSX.ObdButtonArrow & JSXBase.HTMLAttributes<HTMLObdButtonArrowElement>;
      'obd-card': LocalJSX.ObdCard & JSXBase.HTMLAttributes<HTMLObdCardElement>;
      'obd-modal': LocalJSX.ObdModal & JSXBase.HTMLAttributes<HTMLObdModalElement>;
      'obd-page-not-found': LocalJSX.ObdPageNotFound & JSXBase.HTMLAttributes<HTMLObdPageNotFoundElement>;
      'obd-scroll': LocalJSX.ObdScroll & JSXBase.HTMLAttributes<HTMLObdScrollElement>;
      'obd-table': LocalJSX.ObdTable & JSXBase.HTMLAttributes<HTMLObdTableElement>;
    }
  }
}


