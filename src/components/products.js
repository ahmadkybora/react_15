import React, { Component } from 'react';
import { getProducts } from '../services/productService';
import { useEffect, useState } from 'react';
import http from '../services/http';
import { Link } from "react-router-dom";
import Modal, { ModalEdit, ModalShow } from './modal';
import { Img } from '../utils/tools';
import baseUrl from "../baseUrl.json";

// در فانکشنال کامپوننت میتوان به صورت زیر تابع را نوشت
// و همچنین باید ایمپورت کرد کامپوننت و ری اکت را
const Products = () => {
    const [products, setProducts] = useState()
    const [productId, setProductId] = useState(1);
    const modal = ["modalEdit", "modalShow"];

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
        http.get(baseUrl.baseUrl + "products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    // به این روش میتوان داده ای را حذف کرد بوسیله آی دی مورد نظر

    const deleteProduct = async (id) => {
        setProducts(products.filter(p => p.id !== id));
        await http.delete(baseUrl.baseUrl + `products/${id}`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }

    const showProduct = (id) => {
        // console.log(id)
        // setProductId(products.find(p => p.id === id))
    }

    const editProduct = (id) => {
        // setProductId(id)
    }

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
                            <td>
                                <Img 
                                    width="50" 
                                    height="" 
                                    className="image-rounded" 
                                    value={p.image}
                                />
                            </td>
                            <td>
                                <span>
                                    <i onClick={() => deleteProduct(p.id)} className='text-danger fa fa-trash'></i>
                                </span>
                                <span>
                                    <i 
                                        onClick={() => editProduct(p.id)}
                                        className='text-primary fa fa-edit' 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#editModal" />
                                        <ModalEdit 
                                            name="editModal" 
                                            modal={modal["modalEdit"]} 
                                            p={p.id}
                                        />

                                </span>
                                <span>
                                    <i 
                                        onClick={() => showProduct(p.id)}
                                        className='text-success fa fa-eye' 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#showModal" />
                                        <ModalShow 
                                            name="showModal" 
                                            modal={modal["modalShow"]} 
                                            p={p.id}
                                        />
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