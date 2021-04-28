import React from "react";

import classes from './ImageUpload.module.css';
// import { FaRegTrashAlt } from '../node_modules/react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            urls: [],
            isDragging: false,
            file: null,
            base64URL: ""
        }

        this.onChange = this.onChange.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragLeave = this.handleDragLeave.bind(this);
        this.handleFiles = this.handleFiles.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onRemove(index) {
        var {files, urls} = this.state;
        let newFiles = files.filter((file, i) => i !== index);
        let newUrls = urls.filter((url, i) => i !== index);

        this.setState({
            ...this.state,
            files: newFiles,
            urls: newUrls
        });
    }

    handleDrags(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            ...this.state,
            isDragging: true
        });
    }

    handleDragEnter(e) {
        this.handleDrags(e);
    }

    handleDragOver(e) {
        this.handleDrags(e);
    }

    handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
            ...this.state,
            isDragging: false
        });
    }
    getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load something...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    onChange = (e) => {
        e.preventDefault()
        const files = e.target.files;
        [].forEach.call(files, this.handleFiles);

        // console.log('e.target files []',e.target.files[0]);

        let { file } = this.state;

        file = e.target.files[0]; // take img

        this.getBase64(file)
            .then(result => {
                file["base64"] = result;
                console.log("File Is", file);
                this.setState({
                    base64URL: result,
                    file
                });
            })
            .catch(err => {
                console.log(err);
            });

        this.setState({
            file: e.target.files[0]
        });

        this.props.onAddingImage(this.state.base64URL);


        console.log('[CHECKING BASE64 BEFORE SENDING]', this.state.base64URL)

    };

    handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();

        const data = e.dataTransfer;
        const files = data.files;
        console.log("Oops...you dropped this: ", files);

        [].forEach.call(files, this.handleFiles);

        this.setState({
            ...this.state,
            isDragging: false
        });
    }

    handleFiles(file) {
        // this could be refactored to not use the file reader
        var reader = new FileReader();

        reader.onloadend = () => {

            var imageUrl = window.URL.createObjectURL(file);

            this.setState({
                files: [file, ...this.state.files],
                urls: [imageUrl, ...this.state.urls]
            });
        }
        reader.readAsDataURL(file);
    }

    render() {
        const {
            urls,
            files,
            // isDragging
        } = this.state;
        // const dropClass = isDragging && "dragging";

        return (
            <div>
                <div className={classes.uploadInput} >
                    <input type="file"
                           onChange={this.onChange}
                           accept="image/*"
                           multiple
                    />
                    <div className={classes.dragDrop}>
                        <div
                             onDrop={this.handleDrop}
                             onDragOver={this.handleDragOver}
                             onDragEnter={this.handleDragEnter}
                             onDragLeave={this.handleDragLeave} >
                            <div className={classes.inside}>
                                <span>Drop files here</span>
                                <div>
                                    <FontAwesomeIcon
                                        className={classes.materialIcons}
                                        icon={faArrowAltCircleUp}>
                                        file_upload
                                    </FontAwesomeIcon>
                                    {/*<i className={classes.materialIcons}>file_upload</i>*/}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={classes.imagePreviewContainer}>
                    {
                        urls && (urls.map((url, i) => (
                            <div className={classes.previewItem} key={Math.random()}>
                                <img alt="uploadImage" className={classes.imagePreview} src={url} />
                                <div className={classes.details}>
                                    <h6>{files[i].name}</h6>
                                    <h6>{files[i].size.toLocaleString()} KBs</h6>
                                    <h6>{files[i].type}</h6>
                                    <FontAwesomeIcon
                                        className={classes.materialIcons}
                                        onClick={() => this.onRemove(i)}
                                        icon={faTrashAlt} >
                                        delete
                                    </FontAwesomeIcon>
                                </div>
                            </div>
                        )))
                    }
                </div>
            </div>
        );
    }
}

export default ImageUpload;

// ReactDOM.render(<ImageUpload />, document.querySelector("#app"));
