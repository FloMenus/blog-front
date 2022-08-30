import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Form from "../components/Form";
import Input from "../components/Input";
import H2 from "../components/H2";

const PostCreation = () => {
    const Navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
  
    const [errors, setErrors] = useState({});
  
    // USER ////////////////////////////////////////////////////////////////
  
    const handleChangeTitle = (e) => {
      setTitle(e.target.value);
    };
    const handleChangeAuthor = (e) => {
      setAuthor(e.target.value);
    };
    const handleChangeDescription = (e) => {
      setDescription(e.target.value);
    };
    const handleChangeCategory = (e) => {
      setCategory(e.target.value);
    };
  
    //////////////////////////////////////////////////////////////////
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      resetErrors();
  
      const user = {
        title,
        author,
        description,
        category
      };
  
      const request = await fetch(`http://localhost:8000/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const response = await request.json();
  
      if (request.status === 200) {
        Navigate("/");
      } else {
        response.map((res) => {
          if (res.param === "name") {
            setErrorTitle(res.msg);
          } else if (res.param === "email") {
            setErrorEmail(res.msg);
          } else if (res.param === "password") {
            setErrorPassword(res.msg);
          } else if (res.param === "city") {
            setErrorCity(res.msg);
          } else if (res.param === "image") {
            setErrorImage(res.msg);
          }
        });
      }
    };
  
    const resetErrors = () => {
      setErrorTitle("");
      setErrorAuthor("");
      setErrorDescription("");
      setErrorCategory("");
    };
  
  return (
    <>
        <H2>Create a post</H2>
        <Form>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Input/>            
            </Form>
    </>
  );
};

export default PostCreation;
