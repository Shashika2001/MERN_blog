import { Table } from 'flowbite-react';
import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function DashPost() {
  const {currentUser} = useSelector((state)=>state.user);
  const {userPosts,setUserPosts} = useState([]);
 console.log(userPosts);
  useEffect(()=>{
    
    const fetchPosts = async () => {
      try{
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        console.log(res);
        const data = await res.json();
        //console.log(data);
        if(res.ok){
          setUserPosts(data.posts)
          //console.log(data.posts);
        }

      }
      catch(error){
        console.log(error.message);
      
  }
};
if (currentUser.isAdmin) {
  fetchPosts();
}
  },[currentUser._id]);
  return (
    <div>
      {currentUser.isAdmin > 0 ? (
      <>
        <Table hoverable className= 'shadow-md'>
          <Table.Head>
            <Table.HeadCell>Date updated</Table.HeadCell>
            <Table.HeadCell>Post image</Table.HeadCell>
            <Table.HeadCell>Post Title</Table.HeadCell>
            <Table.HeadCell>category</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
            </Table.HeadCell>
          </Table.Head>  

          {userPosts.map((post)=>(
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {new Date(post.updatedAt).toLocaleDateString()}
                </Table.Cell>
                <Table.Cell>
                  <Link to = {`/post/${post.slug}`}>
                    <img
                     src={post.image}
                      alt={post.title} 
                      className='w-20 h-20 object-cover bg-gray-500' />
                      </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to = {`/post/${post.slug}`}>
                    {post.title}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  {post.category}
                </Table.Cell>
                <Table.Cell>
                  <span className='font-medium text-red-500 hover:underline cursor-pointer'>Delete</span>
                </Table.Cell>
                <Table.Cell>
                  <Link to = {`/update/${post.slug}`}>
                    <span className='text-teal-500 hover:underline'>Edit</span>
                  </Link>  
                  
                </Table.Cell>
                  
              </Table.Row>
            </Table.Body>
          ))}

        </Table>
      </>
      ):(
        <p>You have no posts yet</p>
      )}
    </div>
  )
}
