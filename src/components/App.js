import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

import reactCSS from 'reactcss'
import { SketchPicker, ChromePicker  } from 'react-color'
import {
  PhotoshopPicker ,
  CustomPicker 
} from 'react-color';

class App extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
    bg:''
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

   trim=(str)=> {
  return str.replace(/^\s+|\s+$/gm, '');
}

 rgbaToHex=(rgba)=> {
  var parts = rgba.substring(rgba.indexOf("(")).split(","),
    r = parseInt(this.trim(parts[0].substring(1)), 10),
    g = parseInt(this.trim(parts[1]), 10),
    b = parseInt(this.trim(parts[2]), 10),
    a = parseFloat(this.trim(parts[3].substring(0, parts[3].length - 1))).toFixed(2);

  return ('#' + r.toString(16) + g.toString(16) + b.toString(16) + (a * 255).toString(16).substring(0, 2));
}

  handleClose = () => {
    this.setState({ displayColorPicker: false })
    
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    
    this.setState({
      bg: color.hex
    })
  };
  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    
    return (
      <div style={{ backgroundColor: this.state.bg}}>
        <CommentBox />
        <CommentList />
        {'color picker libbrary'}
        <div>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <ChromePicker color={this.state.color} onChange={this.handleChange} />
          </div> : null}
        </div>


        'new one'
       <div style={{marginLeft:'700px'}}>
          {this.state.displayColorPicker ? <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div> : null}</div>
        </div>
    );
  }
}
export default App;
