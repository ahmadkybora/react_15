import React, { Component } from 'react';
import { Button, Form, Input, Select, TextArea, Label } from '../utils/tools';

const Modal = ({ name, exampleModal, modal, p }) => {
    return (
        <div className="modal fade" id={exampleModal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss={modal} aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    <form>
                        {console.log(Object.keys(p).length)}
                        <div className='row'>
                            <div className="form-group col-md-4">
                                <Label htmlFor="category" value="Title" />
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
                                <Label htmlFor="category" value="Price" />
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
                                <Label htmlFor="category" value="Rate"/>
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
                                <Label htmlFor="category" value="Count" />
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
                                <Label htmlFor="category" value="Description" />
                                <TextArea 
                                    name={p.description} 
                                    value={p.description} 
                                    className="form-control" 
                                    id=""
                                ></TextArea>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <div className=''>
                        <Button 
                            type={null} 
                            name={null} 
                            value="Register" 
                            className="btn btn-success" 
                            id={null} 
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal