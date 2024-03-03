import {email, authStage} from "$lib/store"


export async function pageProtection() {
    
    try {
        const response = await fetch('http://localhost:4000/owner');
        const data = await response.json();
        email.subscribe((value)=>{
        if(data.owner !== value){
            authStage.update((n)=> n = true)
        }
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}