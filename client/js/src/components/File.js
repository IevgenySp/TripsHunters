import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class File extends Component {
    chooseFile() {
        this.fileInput.click();
    }

    setFile(el) {
        let _this = this;
        const file = this.fileInput.files[0];

        this.fileContainer.innerText = file.name;

        let form = new FormData(this.formData);

        let request = new XMLHttpRequest();
        request.open("POST", '/api/v1/documents', true);

        _this.props.onFileUpload({
            file: file.name,
            progress: 0
        });

        request.upload.onprogress = function(e) {
            const progress = e.loaded / e.total * 100;
            _this.props.onFileUpload({
                file: file.name,
                progress: progress
            });
        };

        _this.props.onResetFacts({});
        this.props.socket.send({message: 'GET_FACTS'});
        request.send(form);
        this.props.ownProps.router.push('/facts')
    }

    render() {
        let fileName = this.props.file.file ? this.props.file.file : '';

        return (
            <div>
                <div className='page-title'>Upload your data ...
                </div>
                <div style={style}>
                    <div className="file-upload">
                        <div ref={(el)=>{this.fileContainer = el}}
                             className="file-name">
                            {fileName}
                        </div>
                        <FlatButton onClick={this.chooseFile.bind(this)}
                                    style={{
                                            oveflow:"initial",
                                            minWidth:"auto"
                                        }}
                                    containerElement='label' // <-- Just add me!
                                    labelStyle={{fontFamily: fontStyle}}
                                    label='Choose File'>
                        </FlatButton>
                        <form ref={(el)=>{this.formData = el}}
                              onChange={this.setFile.bind(this)}
                              style={{display:"none"}}
                              encType="multipart/form-data">
                            <input id="domain" type="text" name="domain"
                                   defaultValue={this.props.questionnaire.domain}/>
                            <input ref={(el)=>{this.fileInput = el}}
                                   id="file"
                                   type="file"
                                   name="file"
                                   accept="text/csv"
                            />
                        </form>
                    </div>

                </div>
                <FlatButton className="next" label="NEXT" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/facts')}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/')}/>
            </div>
        )
    }
}

export default connect((state, ownProps) => ({
        questionnaire: state.questionnaire,
        file: state.file,
        socket: state.socket,
        ownProps
    }),
    dispatch => ({
        onFileUpload: (data) => {
            dispatch({type: 'FILE_UPLOAD', payload: data});
        },
        onResetFacts: (data) => {
            dispatch({type: 'RESET_FACTS', payload: []});
        }
    }))(File);