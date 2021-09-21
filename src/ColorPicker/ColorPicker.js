import React, { Component} from 'react';
import './ColorPicker.css';


class ColorPicker extends Component {
    state = {
        activeOptInd: 3, //индекс массива
    };
    setActiveInd = (index) => {
        this.setState({ activeOptInd: index });    //метод получает индекс кнопки и кидает его в стэйт
    }

    makeClassesName = (index) => {
       const Classes = ['ColorPicker_option'];
                        if (index === this.state.activeOptInd) {
                            Classes.push('ColorPicker_option_active');
        }
        return Classes.join(' ');
    }

    render() {
        const { activeOptInd } = this.state;
        const { options } = this.props;
        const {label} = options[activeOptInd];
        return (
    <div className="ColorPicker">
                <h2 className="ColorPicker_title">Color Picker</h2>
                 <p> Выбран цвет: {label} </p>
                <div className="box">
                   
                    {this.props.options.map(({ label, color }, index) =>  (
                    <button key={label} className={this.makeClassesName(index)}
                        style={{
                            backgroundColor: color
                            }}
                        onClick={()=> this.setActiveInd(index)}>

                </button>
            )
            )}
        </div>
    </div>
);
    }
}


export default ColorPicker;