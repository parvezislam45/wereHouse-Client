import { Button, Grid, Input, Paper, TextareaAutosize, TextField } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebas.init';



const ManageInventory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }

    const handlePlaceOrder = (data,event) =>{
        const url =`http://localhost:7000/product`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(result =>{
            console.log(result)
            toast('product Added sucessfully')
            event.target.reset()
        })
    }

    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Added Item</h2>
                    </Grid>
                    <form onSubmit={handleSubmit(handlePlaceOrder)}>
                        <Input {...register("name", { required: true, maxLength: 20 })} label='Price'fullWidth placeholder="Input Name"/>
                        <Input {...register("email")}fullWidth label='Price' placeholder="email"/>
                        <TextareaAutosize {...register("description")}label='description' placeholder="description"></TextareaAutosize>
                        <Input {...register("price")}label='Price' placeholder="Input Price"/>   
                        <Input {...register("img")}fullWidth label='img' placeholder="Input Url" />
                        <Input {...register("seller")}fullWidth label='seller' placeholder="seller" />
                        <Input {...register("quantity")}fullWidth label='stock' placeholder="quantity" />

                        <div className='mt-5'>
                            <Button type='submit' variant='contained' color='primary'>Add Item</Button>
                        </div>
                    </form>
                </Paper>
            </Grid>

        </div>
    );
};

export default ManageInventory;