class Result {

  constructor(containerElement){
    this.prevTable = document.querySelectorAll("#result table tbody");
    this.message = document.querySelectorAll('#result p');
    this.prevTableRows = this.prevTable.getElementsByTagName('tr');
    this.containerElement = containerElement;
  }

  show(){

    this.containerElement.classList.remove('inactive');
  }

  hide(){

    this.containerElement.classList.add('inactive');
    this.prevTable.innerHTML = "";
}


}
