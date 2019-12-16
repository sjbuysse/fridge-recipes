import React, { FormEvent } from 'react';
import { useState } from 'react';
import './Form.scss'

interface Props {
    label: string;
    handleSubmit: (inputValue: string) => void
}

const Form = (props: Props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.handleSubmit(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>{props.label}</label>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Form
