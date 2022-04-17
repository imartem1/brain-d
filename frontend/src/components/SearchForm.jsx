import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import classes from "./UI/input/MyInput.module.css";
import Button from "@mui/material/Button";

const URL_POST_SEARCH = 'http://127.0.0.1:8000/search';

const postSearch = (body) => {
    const result = fetch(URL_POST_SEARCH, {
        method: 'POST',
        body: JSON.stringify(body),
    })
    result
        .then((response)=> {
            console.log(response)
            return response.json()
        })
        .then((models) => {
            console.log(models)
            console.log(models)
            return models
        })
        .catch((error) => {
            console.log('error', error)
        })

}

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isGoing: true,
            anterior_segment: true,
            posterior_segment: true,
            long_segment: true,
            fronto_occipital_fasciculus: true,
            inferior_longitudinal_fasciculus: true,
            uncinate_fasciculus: true,
            frontal_aslant_tract: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        //this.setState({value: event.target.value});
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : this.setState({value: event.target.value});
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //alert('Отправленное имя: ' + this.state.value);

        const newRequest = {
            'id' : this.state.value,
            'anterior_segment' : Number(this.state.anterior_segment),
            'posterior_segment': Number(this.state.posterior_segment),
            'long_segment' : Number(this.state.long_segment),
            'fronto_occipital_fasciculus': Number(this.state.fronto_occipital_fasciculus),
            'inferior_longitudinal_fasciculus': Number(this.state.inferior_longitudinal_fasciculus),
            'uncinate_fasciculus': Number(this.state.uncinate_fasciculus),
            'frontal_aslant_tract': Number(this.state.frontal_aslant_tract),
            
        }
        postSearch(newRequest)
        console.log(JSON.stringify(newRequest))
        event.preventDefault();
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="SearchForm">
                    <label className="track">
                        <TextField
                            className='search_id'
                            id="standard-basic"
                            label="ID"
                            variant="standard"
                            value={this.state.value}
                            type="text"
                            onChange={this.handleChange}
                        />

                    </label>
                    <FormGroup className="track">
                        <FormControlLabel control={
                            <Checkbox
                                name="anterior_segment"
                                type="checkbox"
                                checked={this.state.anterior_segment}
                                onChange={this.handleChange} />
                        } label="anterior segment" />
                        <FormControlLabel control={
                            <Checkbox
                                name="posterior_segment"
                                type="checkbox"
                                checked={this.state.posterior_segment}
                                onChange={this.handleChange} />
                        } label="posterior segment" />
                        <FormControlLabel control={
                            <Checkbox
                                name="long_segment"
                                type="checkbox"
                                checked={this.state.long_segment}
                                onChange={this.handleChange} />
                        } label="long segment" />
                        <FormControlLabel control={
                            <Checkbox
                                name="fronto_occipital_fasciculus"
                                type="checkbox"
                                checked={this.state.fronto_occipital_fasciculus}
                                onChange={this.handleChange} />
                        } label="fronto occipital fasciculus" />
                        <FormControlLabel control={
                            <Checkbox
                                name="inferior_longitudinal_fasciculus"
                                type="checkbox"
                                checked={this.state.inferior_longitudinal_fasciculus}
                                onChange={this.handleChange} />
                        } label="inferior longitudinal fasciculus" />
                        <FormControlLabel control={
                            <Checkbox
                                name="uncinate_fasciculus"
                                type="checkbox"
                                checked={this.state.uncinate_fasciculus}
                                onChange={this.handleChange} />
                        } label="uncinate fasciculus" />
                        <FormControlLabel control={
                            <Checkbox
                                name="frontal_aslant_tract"
                                type="checkbox"
                                checked={this.state.frontal_aslant_tract}
                                onChange={this.handleChange} />
                        } label="frontal aslant tract" />
                    </FormGroup>

                    <Button type="submit" variant="contained" color="success" >Отправить запрос</Button>
                </div>
            </form>
        );
    }
}
export default SearchForm;