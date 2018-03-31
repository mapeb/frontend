import React from "react";

export default class Square extends React.Component {
  render() {
    const { initContent, children } = this.props;
    const show = children ? children : initContent;
    return (
      <div
        className="square unselectable">
          {show}
      </div>
    );
  }
};
