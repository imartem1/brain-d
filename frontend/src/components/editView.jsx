import React, {useState} from 'react';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Slider} from "@mui/material";


const EditView = (
    {   children,
        flag0, setFlag0,
        flag1, setFlag1,
        flag2, setFlag2,
        flag3, setFlag3,
        opac0, setOpac0,
        opac1, setOpac1,
        opac2, setOpac2,
        opac3, setOpac3,

}) =>{
    const changeVisible0 = () => {setFlag0(prevState => !prevState)}
    const changeVisible1 = () => {setFlag1(prevState => !prevState)}
    const changeVisible2 = () => {setFlag2(prevState => !prevState)}
    const changeVisible3 = () => {setFlag3(prevState => !prevState)}
    const changeOpacity0 = (event, newValue) => {setOpac0(newValue)}
    const changeOpacity1 = (event, newValue) => {setOpac1(newValue)}
    const changeOpacity2 = (event, newValue) => {setOpac2(newValue)}
    const changeOpacity3 = (event, newValue) => {setOpac3(newValue)}
    //const [flag, setVisible] = useState(true)
    return (
        <div>
            <div className="edit_view">
                <div className="visibility">
                    <FormControlLabel control={
                        <Checkbox
                            type="checkbox"
                            checked={flag0}
                            onChange={changeVisible0}
                            />
                    } label="видимость_Mesh0" />
                </div>
                <div className="transparency">
                    <Slider
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                        step={0.05}
                        marks
                        min={0}
                        max={1}
                        onChange={changeOpacity0}
                        defaultValue={0.5}
                    />
                    <label htmlFor="transparency">Прозрачность mesh0</label>
                </div>
                <div className="visibility">
                    <FormControlLabel control={
                        <Checkbox
                            type="checkbox"
                            checked={flag1}
                            onChange={changeVisible1}
                        />
                    } label="видимость Mesh1" />
                </div>
                <div className="transparency">
                    <Slider
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                        step={0.05}
                        marks
                        min={0}
                        max={1}
                        onChange={changeOpacity1}
                        defaultValue={0.5}
                    />
                    <label htmlFor="transparency">Прозрачность mesh0</label>
                </div>
                <div className="visibility">
                    <FormControlLabel control={
                        <Checkbox
                            type="checkbox"
                            checked={flag2}
                            onChange={changeVisible2}
                        />
                    } label="видимость Mesh2" />
                </div>

                <div className="transparency">
                    <Slider
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                        step={0.05}
                        marks
                        min={0}
                        max={1}
                        onChange={changeOpacity2}
                        defaultValue={0.5}
                    />
                    <label htmlFor="transparency">Прозрачность mesh0</label>
                </div>
                <div className="visibility">
                    <FormControlLabel control={
                        <Checkbox
                            type="checkbox"
                            checked={flag3}
                            onChange={changeVisible3}
                        />
                    } label="видимость Mesh3" />
                </div>
                <div className="transparency">
                    <Slider
                        aria-label="Temperature"
                        valueLabelDisplay="auto"
                        step={0.05}
                        marks
                        min={0}
                        max={1}
                        onChange={changeOpacity3}
                        defaultValue={0.5}
                    />
                    <label htmlFor="transparency">Прозрачность mesh0</label>
                </div>
            </div>
        </div>
    );
};

export default EditView;