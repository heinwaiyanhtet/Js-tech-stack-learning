import { redirect } from "next/navigation";

async function fetchTeam(id:string) {

    try {

        const res = await fetch(`https://api.com/products/${id}`);

        if (!res.ok) {
            return undefined;
        }
        
    
        return res.json();

    } catch (error) {
            return undefined;

    }
    // const res = await fetch('https://fakestoreapi.com/products/1');
 
}


//write a function named Profile accept params id 
export default async function Profile({params}:{params:{id:string}}) {

    const data = await fetchTeam(params.id);

    if(!data){
        redirect('/');
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}