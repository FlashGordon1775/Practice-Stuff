angular.module("edit-in-place", [])
    .controller("edit",
     editController);

function editController () {
    var eCtrl = this;

    eCtrl.p1Text = "Vero actually fap officia small batch godard. Pabst mixtape actually, accusamus williamsburg ennui brooklyn celiac four dollar toast organic vice +1 cupidatat lomo seitan. Ut proident delectus, dolor polaroid green juice duis kinfolk migas you probably haven't heard of them skateboard.Vice kinfolk you probably haven't heard of them readymade sartorial try-hard. Mustache chicharrones literally vegan, waistcoat occupy direct trade pug kitsch chartreuse venmo quinoa +1 celiac humblebrag. Plaid you probably haven't heard of them blue bottle, chartreuse wayfarers church-key bushwick poutine cred.";

    eCtrl.p2Text = "Scenester DIY shoreditch deep v tote bag, street art paleo. Before they sold out blog salvia listicle, beard keytar in art party est readymade kale chips +1 crucifix id try-hard.Sustainable mixtape fingerstache, pitchfork banjo meditation hashtag artisan kitsch. Sustainable 3 wolf moon helvetica food truck art party, tote bag celiac. Dreamcatcher man bun YOLO butcher, literally banjo jean shorts twee next level drinking vinegar squid yuccie PBR&B art party brooklyn."

    eCtrl.p3Text = "Hammock 8-bit lo-fi ullamco kombucha craft beer. Gentrify tempor wayfarers roof party pop-up. Ugh everyday carry semiotics tattooed nisi actually. Yuccie chia four dollar toast sint photo booth. Street art meggings synth, knausgaard fingerstache tofu lo-fi. Ennui letterpress flexitarian polaroid, crucifix four dollar toast craft beer celiac freegan typewriter thundercats literally affogato. Intelligentsia plaid man braid, church-key YOLO pug banh mi heirloom franzen. Plaid YOLO lumbersexual, XOXO pop-up locavore shabby chic vice offal +1 quinoa pour-over.";
    
    eCtrl.myVar1 = false;

    eCtrl.myVar2 = false;

    eCtrl.myVar3 = false;

    console.log('hello');
    eCtrl.toggle = function(){
        eCtrl.myVar = !eCtrl.myVar;
        console.log('hi');

    };



}