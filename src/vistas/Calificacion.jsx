import '../Estilos/Calificacion.css';
import React from 'react'
import 'boxicons';


const Calificacion = () => {

    const stars = document.querySelectorAll('.star');

    stars.forEach(function(star,index){
        star.addEventListener('click', function(){
            for (let i =0; i<= index; i++){
                stars[i].classList.add('checked')
            }
            for (let i =index+1; i<= stars.length; i++){
                stars[i].classList.remove('checked')
            }
        })
    })

  return (
    <div className="raiting">
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
        <i class="bi bi-star-fill star"></i>
    </div>
  )
}

export default Calificacion