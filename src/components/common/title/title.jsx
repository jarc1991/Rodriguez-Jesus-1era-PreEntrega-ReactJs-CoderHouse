import '../title/styleTitle.css'
const TitleP = (props) => {

    return (

        <>
        <h1 className='d-flex justify-content-center text-center'>BIENVENIDOS A LA TIENDA DE {props.greeting}</h1>
        <p className="display-4 text-center">Acá encontrarás la más variada cantidad de productos de la mejor cantante del siglo XXI</p>
        <div className='bg-black d-flex justify-content-center'>
        <a href='https://www.instagram.com/adele/' rel='noreferrer' target='_blank'><img src='https://turntable.kagiso.io/images/Adele.width-800.jpg' alt="adelePhone"></img></a>
        </div>
        </>
        
    )
}

export default TitleP; 