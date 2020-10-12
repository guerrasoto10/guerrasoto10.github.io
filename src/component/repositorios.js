import React, { useEffect , useState} from "react";
//import repos from "../data/repos";
import Repo from "./repo";

export default () => {
    
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            return setRepos(myRepos);
        }
        

        async function fetchRepos() {
            const response = await fetch ("https://api.github.com/users/guerrasoto10/repos");
            let myRepos = await response.json();
            
            sessionStorage.setItem("repos", JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        fetchRepos();
    },[]);
    return(
        <div className="container mx-auto p-12 max-w-4xl">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mis repositorios en Github</h2>
                <p>Colaboración y contribución</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo)=>{
                    return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
        </div>
    );
};