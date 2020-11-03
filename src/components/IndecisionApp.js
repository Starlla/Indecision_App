import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import Options from './Options'
import React from 'react';

// const obj ={
//     name: 'Vicram',
//     getName(){
//         return this.name;
//     },
// }

// const getName = obj.getName.bind(obj);
// console.log(getName());


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined,
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }

    }

    componentDidUpdate(prevProps, PrevState) {
        console.log('saving data');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => (
            {
                options: []
            }
        ))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option
                })
            }
        ))
    }

    handleClearSelectedOption =()=> {
        this.setState(() => (
            {
                selectedOption: undefined
            }
        ))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({selectedOption: option}))
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })

    }

    render() {
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        )
    }
}

export default IndecisionApp;