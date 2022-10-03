import React from 'react'
import './competences.css'



export default function competences() {
  return (
    <div className='competences' id='competences'>
      <h2 className='title-competences'>mes compétences</h2>

    <p className='text-competences'>j'ai aquis toutes mes compétences, en Développement Web en autodidacte. Aprés plusieurs recherches sur google des dizaines de vidéos sur youtube. j'ai eu connaissance du site  "Udemy" ou des formation sont disponibles, suivant une certaine somme d'argent je me suis dit pourquois pas de toutes façons s'est ce que je veux faire alors allons y aprés avoir suivis une formation html5, css3 je me suis lancer dans une formation apple via l'organisme de formation Simplon ou j'ai apris swift puis j'ai acheter une formation reactJs. A la suite de cette formation je suis rentré en formation chez studi ou je pense avoir un titre proféssionnel de niveau 2   </p>


    <div className='container'>
      <div className='skills'>
        <h2>html  5</h2>
        <div className='progress-bar'>
          <div className='html'><span>72%</span></div>
        </div>

        <h2>css 3</h2>
        <div className='progress-bar'>
          <div className='css'><span>78%</span></div>
        </div>

        <h2>Javascript</h2>
        <div className='progress-bar'>
          <div className='javascript'><span>37%</span></div>
        </div>

        <h2>Reactjs</h2>
        <div className='progress-bar'>
          <div className='reactjs'><span>41%</span></div>
        </div>

        <h2>symfony 6</h2>
        <div className='progress-bar'>
          <div className='symfony'><span>38%</span></div>
        </div>








      </div>
      

    </div>
    





   





    </div>
  )
}
