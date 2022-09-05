// import { Toast } from 'bootstrap';
// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const initial = {
//     name: '',
//     price: '',
//     image: '',
//     description: ''
// }

// const AddEditItem = () => {
//     const [state, setState] = useState('');

//     const [selectedFile, setSelectedFile] = React.useState({});

//     const [name, price, image, description] = state;

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name || !image || !price || !description) {
//             Toast.error('Please provide all Details');
//         }
//         else {
//             axios.post("https://localhost:3000/addItem", {
//                 name,
//                 price,
//                 image,
//                 description

//             }).then(() => {
//                 setState({ name: '', price: '', image: '', description: '' });
//             }).catch((err) => Toast.error(err.response.data));

//             setTimeout(() => {
//                 navigate('/adminhome');
//             }, 500);
//         }
//     }

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setState({ ...state, [name]: value });
//     }

//     const handleFileSelect = (event) => {
//         setSelectedFile(event.target.files[0])
//     }


//     return (
//         <div>
//             <h2>AddEditItem</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">Item Name</label>
//                 <input type="text" id="name" placeholder="Item name .." value={name} onChange={handleInputChange} />

//                 <label htmlFor="image">Image file</label>
//                 <input type="file" name="profile-upload" accept="profile-upload/*" onChange={handleFileSelect} />

//                 <label htmlFor="price">Price</label>
//                 <input type="number" id="price" value={price} onChange={handleInputChange} />

//                 <label htmlFor="description"></label>
//                 <input type="text" id="description" placeholder="I.." value={description} onChange={handleInputChange} />


//             </form>
//         </div>
//     )
// }

// export default AddEditItem