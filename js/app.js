document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-star-form');
  console.log("i'm going to save");
  form.addEventListener('submit', handleSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDelete);


});



const handleSubmit = function(event) {
  console.log("i've been saved");
  event.preventDefault();
  const newStar = document.querySelector('#sport-stars');


//create Div in sports-stars to append book details to
  const newStarItem = document.createElement('div');
  newStarItem.classList.add('star');

//create new  h2 to push name to div
  const newNameItem = document.createElement('h2');
  newNameItem.classList.add('name');
  newNameItem.textContent=`Name: ${this.name.value}`;

  //create new  h4 to push team to div
    const newTeamItem = document.createElement('h4');
    newTeamItem.classList.add('team');
    newTeamItem.textContent=`Team: ${this.team.value}`;

    //create new  p to push sport to div
      const newSportItem = document.createElement('p');
      newSportItem.classList.add('sport');
      newSportItem.textContent=`Sport: ${this.sport.value}`;

  newStarItem.appendChild(newNameItem);
  newStarItem.appendChild(newTeamItem);
  newStarItem.appendChild(newSportItem);
  newStar.appendChild(newStarItem);
    event.target.reset();

}
  const handleDelete = function (event) {
  const sportStars = document.querySelector('#sport-stars');
  sportStars.innerHTML = '';
}
