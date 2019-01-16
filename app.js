// selection element

const showBtn=document.getElementById('myBtn');
const modal=document.querySelector('.modal');
const bodalClocsebtn=document.querySelector('.modal-close-btn');

// modal hide
modal.style.display = 'none';

// Event Listener
showBtn.addEventListener('click',showModal);
bodalClocsebtn.addEventListener('click',closeModal);

// show modal function
function showModal(){
	modal.style.display = 'block';
}

// hide modal function
function closeModal(){
	modal.style.display = 'none';

}

function closeModal2(e){
    if (e.target===modal) {
    	closeModal()
    	
    }
}
window.addEventListener('click',closeModal2);