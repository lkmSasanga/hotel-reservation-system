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
            isDragging: false
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

    onChange(e) {
        e.preventDefault()
        const files = e.target.files;
        [].forEach.call(files, this.handleFiles);
    }

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
        const {urls, files, isDragging} = this.state;
        const dropClass = isDragging ? "dragDrop dragging" : "dragDrop";

        return (
            <div>
                <div className={classes.uploadInput} >
                    <input type="file"
                           onChange={this.onChange}
                           accept="image/*"
                           multiple
                    />
                    <div className={dropClass}
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
                <div className={classes.imagePreviewContainer}>
                    {
                        urls && (urls.map((url, i) => (
                            <div className={classes.previewItem}>
                                <img className={classes.imagePreview} src={url} />
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
                                    {/*<FaRegTrashAlt*/}
                                    {/*    className={classes.materialIcons}*/}
                                    {/*    onClick={() => this.onRemove(i)}>*/}
                                    {/*    delete*/}
                                    {/*</FaRegTrashAlt>*/}
                                    {/*<i className={classes.materialIcons}*/}
                                    {/*   onClick={() => this.onRemove(i)}>delete</i>*/}
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
