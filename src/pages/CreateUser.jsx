import { useState } from 'react';
import axios from 'axios'
import './CreateUser.css'
import { Button, Container, Input, Textarea } from '@chakra-ui/react';

const CreateUser = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const onChangeTitle = (event) => {
        const inputValue = event.target.value
        setTitle(inputValue)
    }

    const onChangeBody = (event) => {
        const inputValue = event.target.value
        setBody(inputValue)
    }

    const handleSubmit = async () => {
        try {
            const postToSubmit = {
                userId: 1,
                title: title,
                body: body
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts/', postToSubmit)
            console.log(response)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className='container'>
            <Container centerContent gap={10}>
                <Input placeholder="Título" onChange={onChangeTitle} value={title}/>
                <Textarea placeholder='Body' onChange={onChangeBody} value={body}/>
                <Button onClick={handleSubmit}>Cadastrar Post</Button>
            </Container>
        </div>
    );
}

export default CreateUser;