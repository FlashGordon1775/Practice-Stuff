angular.module('cardGen',[])
  .controller('form',formController)
  .controller('gallery',galleryController)
  .factory('cardFactory',cardData)

formController.$inject = ['cardFactory'];
galleryController.$inject = ['cardFactory'];

function formController(cardFactory){
  var fCtrl = this;

  fCtrl.newCard = {
    name:'',
    manaColor:'',
    power:0,
    toughness:0,
    art:''
  }


  fCtrl.addCard = function(){
    cardFactory.cardList.push(fCtrl.newCard);
    fCtrl.newCard = {};
    console.log(cardFactory.cardList)
  }
}

function galleryController(cardFactory){
  var gCtrl = this;
  gCtrl.cardList = cardFactory.cardList;
}

function cardData(){
  var cardList = [];
  return {
    cardList: cardList,
  }
}