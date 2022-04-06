import React, { Component } from 'react';
import http from '../services/http';
import Tools from '../utils/helper/Tools';
import { Button, Form, Input, Select, TextArea, Label, Img, Card } from '../utils/tools';

const updateProduct = (id) => {
    http.patch("")
}

const Modal = () => {}

const styleCard = {
    maxWidth: "540px"
}

export const ModalEdit = ({ name, modal, p }) => {
    return (
        <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss={modal} aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <form onSubmit={updateProduct(p.id)}>
                        {console.log(Object.keys(p).length)}
                        <div className='row'>
                            <div className="form-group col-md-4">
                                <Label htmlFor="title" value="Title" />
                                <Input 
                                    type="text" 
                                    name={p.title} 
                                    className="form-control" 
                                    id="" 
                                    value={p.title} 
                                    placeholder="" 
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <Label htmlFor="price" value="Price" />
                                <Input 
                                    type="number" 
                                    name={p.price} 
                                    className="form-control" 
                                    id="" 
                                    value={p.price} 
                                    placeholder="" 
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <Label htmlFor="category" value="Category" />
                                <Input 
                                    type="text" 
                                    name={p.category} 
                                    className="form-control" 
                                    id="category" 
                                    value={p.category} 
                                    placeholder="" 
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <Label htmlFor="rate" value="Rate"/>
                                <Input 
                                    type="number" 
                                    name={p.rating.rate} 
                                    className="form-control" 
                                    id="" 
                                    value={p.rating.rate} 
                                    placeholder="" 
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <Label htmlFor="count" value="Count" />
                                <Input 
                                    type="text" 
                                    name={p.rating.count} 
                                    className="form-control" 
                                    id="" 
                                    value={p.rating.count} 
                                    placeholder="" 
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <Label htmlFor="description" value="Description" />
                                <TextArea 
                                    name={p.description} 
                                    value={p.description} 
                                    className="form-control" 
                                    id=""
                                />
                            </div>
                            <div className='row'>
                                <Label htmlFor="image" value="Image" />
                                <div className="form-group col-md-6">
                                    <Input 
                                        type="file" 
                                        name={p.image} 
                                        className="form-control" 
                                        id=""
                                        placeholder="" 
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Img 
                                        width="50" 
                                        height="" 
                                        className="image-rounded" 
                                        value={p.image}
                                    />
                                </div>
                                <div className='form-group col-md-12'>
                                    <Tools.Button 
                                        type={null} 
                                        name={null} 
                                        value="Register" 
                                        className="btn btn-success" 
                                        id={null} 
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <div className=''>
                        <button type="button" class="btn btn-close btn-danger" aria-label="Close"></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export const ModalShow = ({ name, modal, p }) => {
    return (
        <div className="modal fade" id="showModal" tabindex="-1" aria-labelledby="showModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="showModalLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss={modal} aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <Card 
                        styleCard={styleCard} 
                        img={p.image} 
                        width="150px" 
                        height=""
                        title={p.title} 
                        text={p.description} 
                        linkReadMore="" 
                        linkBuy="" 
                    />
                </div>

                <div className="modal-footer">
                    <div className=''>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal