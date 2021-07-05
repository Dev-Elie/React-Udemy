const Card = ({ title,name,image}) => {
    return (
        <div className="card text-center">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> { name } </h5>
          <p className="card-text"> { title } </p>
        <button className='btn btn-danger'>Delete</button>
        </div>
        </div>
    )
}

export default Card;