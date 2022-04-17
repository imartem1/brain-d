import React, {useState} from 'react';
import EditView from "../components/editView";
import Model from "../components/model";




function MainPage({linkpath}) {
    const [visible0, setVisible0] = useState(true)
    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(true)
    const [visible3, setVisible3] = useState(true)
    const [opacity0, setOpacity0] = useState(0.5)
    const [opacity1, setOpacity1] = useState(0.5)
    const [opacity2, setOpacity2] = useState(0.5)
    const [opacity3, setOpacity3] = useState(0.5)
    
    
    return(
        <div className="App">

            <div className="side_panel">
                <EditView
                    flag0={visible0} setFlag0={setVisible0}
                    flag1={visible1} setFlag1={setVisible1}
                    flag2={visible2} setFlag2={setVisible2}
                    flag3={visible3} setFlag3={setVisible3}
                    opac0={opacity0} setOpac0={setOpacity0}
                    opac1={opacity1} setOpac1={setOpacity1}
                    opac2={opacity2} setOpac2={setOpacity2}
                    opac3={opacity3} setOpac3={setOpacity3}
                />
            </div>
                <div className="main_action">
                <Model 
                    linkpath={linkpath}
                    flag0={visible0}
                    flag1={visible1}
                    flag2={visible2}
                    flag3={visible3}
                    opac0={opacity0}
                    opac1={opacity1}
                    opac2={opacity2}
                    opac3={opacity3}
                />
                </div>
        </div>
    )
}

export default MainPage;