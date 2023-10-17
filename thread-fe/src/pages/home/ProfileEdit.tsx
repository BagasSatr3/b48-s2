import { API } from "@/libs/api";
import { Box, Button, FormControl, FormLabel, Image, Input, Text, Textarea } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface Profile {
    full_name: string,
    username: string,
    profile_description: string,
    profile_picture: string,
}

export function ProfileEdit() {
    const { id } = useParams()

    const [profile, setProfile] = useState<Profile>()

    const fetchData = async () => {
        try {
            const res = await API.get(`/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            
            setProfile(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const [form, setForm] = useState({
        fullName: '',
        username: '',
        description: '',
        image: null, // Change to null
      });

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
  
    if ('files' in event.target) {
      const inputElement = event.target as HTMLInputElement;
      const files = inputElement.files;
  
      if (files && files.length > 0) {
        const image = URL.createObjectURL(files[0]);
        setPreviewImage(image);
        setForm({
          ...form,
          [name]: files[0], // Store the File object in the form state
        });
        return;
      }
    }
  
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("username", form.username);
    formData.append("description", form.description);
  
    if (form.image) {
      formData.append("image", form.image); // Append the File object
    }
  
    try {
      await API.patch(`/user/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          'Content-Type': 'multipart/form-data', // Make sure to set the correct content type
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    fetchData()
  },[])
  
    return (
        <>
           <Box>
            <Text fontSize={'3xl'}>Profile Edit</Text>
            <Box m={4} color={'white'}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Text fontSize={'4xl'} p={1}>{profile?.full_name}</Text>
                    <Image
                    src={previewImage ? previewImage : profile?.profile_picture}
                    objectFit={'cover'}
                    rounded={'xl'}
                    w={'41em'}
                    maxH={'13em'}
                    />
                    <Box display="flex" alignItems="center">
                        <Image
                            src={previewImage ? previewImage : profile?.profile_picture}
                            ml={10}
                            mt={-20}
                            objectFit={'cover'}
                            rounded={'full'}
                            w={'9em'}
                            h={'9em'}
                        />
                        <Input type='file' onChange={changeHandler} name="image"></Input>
                    </Box>
                <Text fontSize={'3xl'} mt={4}>{profile?.full_name}</Text>
                <Text color={'gray'}>@{profile?.username}</Text>
                <Text fontSize={'xl'}>{profile?.profile_description}</Text>
                <FormControl mt={2}>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' placeholder={'Syusetu Kohaku'} name="fullName" onChange={changeHandler}/>
                </FormControl>
                <FormControl mt={2}>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder={'@kohaku'} name="username" onChange={changeHandler}/>
                </FormControl>
                <FormControl mt={2}>
                    <FormLabel>Description</FormLabel>
                    <Textarea onChange={changeHandler} name="description"></Textarea>
                </FormControl>
                <Button mt={2} type="submit">Edit</Button>
                </form>
            </Box>
            </Box>

        </>
    )
}