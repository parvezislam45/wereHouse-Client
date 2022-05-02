
import { Button, Grid, Input, Paper, TextareaAutosize, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:7000/product`;
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result);
        })
    };
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }

    return (
        <div>
            <h1 className='text-white'>Added Product</h1>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Added Item</h2>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("name", { required: true, maxLength: 20 })} placeholder="Input Name"/>
                        <Input {...register("price")}label='Price' placeholder="Input Price" />
                        <TextareaAutosize {...register("description")}label='description' placeholder="description"></TextareaAutosize>
                        <Input {...register("img")}label='img' placeholder="Input Url" />
                        <Input {...register("stock")}label='stock' placeholder="Add Stock" />

                        <div className='mt-5'>
                            <Button type='submit' variant='contained' color='primary'>Add Item</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>

        </div>
    );
};

export default AddProduct;