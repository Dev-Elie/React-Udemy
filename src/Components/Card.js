const Card = ({ title,name,image,children,onChangeName,onChangeInput}) => {
    return (
  		<div className="card">
  		<img src={image} className="card-img-top" alt="..."/>
  		<div className="card-body">
  		  <h5 className="card-title"> { name } </h5>
          <input type='text' onChange={onChangeInput} value={name} />
          <button className='btn btn-success' onClick={onChangeName} >Change Name</button>
  		  <p className="card-text"> { title } </p>
          {children }
  		</div>
  		</div>
    )
}

export default Card;