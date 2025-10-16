import { useState } from "react";

function Formulaire() {
    const [Nom, setNom] = useState('');
    function handleSubmit(){
        alert(`bonjour ${Nom}`);


    };
    return (
        <div>
            <input 
                type="text" 
                value={Nom} 
                onChange={(e) => setNom(e.target.value)} 
                placeholder="Entrez votre nom" 
            />
            <button onClick={handleSubmit}>Bonjour</button>
        </div>
    );
}

export default Formulaire;