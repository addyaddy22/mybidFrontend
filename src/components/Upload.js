import React from "react";
import axios from 'axios';

const Upload = () => {
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState({});

    const handleSubmit = (event) => {
        console.log(selectedFile)
        let formData = new FormData();
        console.log(formData)
        formData.append("profile-upload", selectedFile);
        event.preventDefault()
        console.log(formData)
        axios.post('http://localhost:3000/profileUpload', {
            formData
        }).then(() => {
            console.log('Success');
        });

    };
    // const formData = new FormData();
    // formData.append("selectedFile", selectedFile);
    // try {
    //   console.log('here')
    //   const response = axios({
    //     method: "post",
    //     url: "http://localhost:3000/profileUpload",
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch (error) {
    //   console.log(error)
    // }


    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="profile-upload" accept="profile-upload/*" onChange={handleFileSelect} />
            <input type="submit" value="profile-upload" />
        </form>
    )
};

export default Upload