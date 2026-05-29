const API_URL = process.env.NEXT_PUBLIC_API_URL ;

export async function getApiHealth(){

    const res = await fetch ('${API_URL}/');
    return res.text(); 
}