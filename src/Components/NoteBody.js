import React, {useState} from 'react';

function NoteHeader() {
    const [listStatus, setListStatus] = useState(false);

    const handleListStatus= ()=> {
        setListStatus(!listStatus);
        console.log(listStatus);
    };

    let inputNote

    return (
        <div className="container-fluid" >
            <div className="input row" style={{background:'#202124'}}>
                <input className="form-control form-control-lg" type="text" placeholder="Take a note.." style={{background:'#202124',width: '90%', border: 'transparent' ,borderRadius: 'inherit', boxShadow:'none'}}></input>
                <button type="button" className="btn btn-dark" onClick={handleListStatus}>
                    <img src="1x/twotone_check_box_white_24dp.png" />
                </button>
            </div>
        </div>
    );
}

export default NoteHeader;