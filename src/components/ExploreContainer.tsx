import './ExploreContainer.css';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className='container'>
            <h3>
                ¡Hola, <strong> {name}</strong> !
            </h3>
            <p>
                Puedes hacer click en el botón de (+) para editar tu nombre y en la
                papelera para eliminarlo.
            </p>
        </div>
    );
};

export default ExploreContainer;
