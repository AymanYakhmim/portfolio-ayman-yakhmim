import { Card } from 'primereact/card';
export default function Projets (){
    return(
        <div>
             <Card title="Projet PFA - Année : 2022" style={{width:'70%', margin:'auto'}}>
                    <p className="m-0">
                        <ul>
                            <li>Le projet MH gère la reservation d'un hotel</li>
                            <li><strong>Technologie : </strong>Django, MySQL</li>
                        </ul>        
                    </p>
            </Card>

            <Card title="Projet PFA - Année : 2023" style={{width:'70%', margin:'auto',  marginTop:'20px'}}>
                    <p className="m-0">
                        <ul>
                            <li>gestion des examens</li>
                            <li><strong>Technologie : </strong>Django, SQLite, React</li>
                        </ul>        
                    </p>
            </Card>
          
        </div>
    );
}