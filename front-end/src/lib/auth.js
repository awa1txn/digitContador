import {email, authStage, authSuccess} from "$lib/store"


export async function pageProtection() {
    
    try {
        const response = await fetch('http://localhost:4000/owner');
        const data = await response.json();
        email.subscribe((value)=>{
        if(data.owner !== value){
            console.log('owner:',data.owner,'match:', value, 'equation:',data.owner !== value)
            

            authStage.update((n)=> n = true)
        }
        })
        authSuccess.update((n)=> n = true)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}