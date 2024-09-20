import axios from "axios";


//add

export const HnadleAddcart=async (item)=>{
    const user=localStorage.getItem("id");

    if(user){
        try{
         const res= await  axios.get(`http://localhost:3001/users/${user}`);
          const currentCart=res.data.cart;
          

          const exist=currentCart.find((cart)=>cart.id===item.id);

          if(exist){
            alert("Item alredy in your cart");
          }else{
            const updateCart=[...currentCart,item];
            await axios.patch(`http://localhost:3001/users/${user}`,{cart:updateCart});
            alert("Item Successfully added to the cart..!")
          }
        }
        catch{
            console.log("Error...!");
        }
    }else{
        alert("Login to continue")
    }
     
}

//remove 

export const Remove= async(CartId)=>{
    const userId=localStorage.getItem("id");
    if(!userId){
        alert("Plese Login..!")
    }else{
        try{
            const resp=await axios.get(`http://localhost:3001/users/${userId}`)
            const Current=resp.data.cart;

            const UpdateCart=Current.filter((item)=>item.id!==CartId.id);

            await axios.patch(`http://localhost:3001/users/${userId}`,{
                cart:UpdateCart
            });
        }
        catch{
            console.log("Error...!");
        }
    }


}