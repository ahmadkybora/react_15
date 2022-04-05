import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import { useEffect, useState } from 'react';
import http from '../services/http';
import { Link } from "react-router-dom";
import Modal from './modal';

// در فانکشنال کامپوننت میتوان به صورت زیر تابع را نوشت
// و همچنین باید ایمپورت کرد کامپوننت و ری اکت را
const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        getAllProducts()
    }, [])

        // در صورتیکه میخواهید 
    // api
    // را اینجا استفاده کنید با استفاده از هوک یوز استیت
    // هم میتوانید مستقیما داخل هوک یوز افکت استفاده کنید
    // و هم داخل یک تابع و آن را داخل یوز افکت کال کنید حواستان باشد حتما آرایه
    // وابستگی را بگذارید و اینکه حتما باید یک شرط برای چک کردن متغییر بگذارید
    // زیرا بدون شرط دیلی اعمال نمیشود وخطا میدهد

    // البته بوسیله کد نامتقارن هم میتوان اینکار را انجام داد
    const getAllProducts = () => {
        http.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    // به این روش میتوان داده ای را حذف کرد بوسیله آی دی مورد نظر

    const deleteProduct = async (id) => {
        setProducts(products.filter(p => p.id !== id));
        await http.delete(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }

    const editProduct = (p) => {
        // return (
        //     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div className="modal-dialog">
        //             <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //             </div>
        //             <div className="modal-body">
        //                 <form>
        //                     <input />
        //                 </form>
        //             </div>
        //             <div className="modal-footer">
        //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary">Save changes</button>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // )
    }

    const modal = "modal"
    const exampleModal = "exampleModal"
    return (
        
        <div>
            <table className='table table-striped table-bordered table-responsive'>
                <thead className="text-center">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <thead className="text-center">
                    {products && products.map(p => (
                        <tr key={p.id} className="text-center">
                            <td>{p.id}</td>
                            <td>{p.title.substring(1, 10)}</td>
                            <td>{p.price}</td>
                            <td>{p.description.substring(1, 50)}</td>
                            <td><img src={p.image} width="50" className="rounded-circle" /></td>
                            <td>
                                <span>
                                    <i onClick={() => deleteProduct(p.id)} className='text-danger fa fa-trash'></i>
                                </span>
                                <span>
                                    <i 
                                        onClick={() => editProduct(p)} 
                                        className='text-primary fa fa-edit' 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal" />
                                        <Modal name="editModal" modal={modal} exampleModal={exampleModal} p={p}/>
                                </span>
                            </td>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}

export default Products;