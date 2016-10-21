// DISTANCE SECTION
var counter = 1;
var counterMass = 1;
var limit = 10;
var typesDrone = [
    'quad_plus','quad_x','octo_plus','octo_x','octo_square_plus',
    'octo_square_x','octo_colinear_plus','octo_colinear_x','octo_coax_plus',
    'octo_coax_x8','hexa_plus','hexa_x','hexa_h','hexa_coax_y6','hexa_coax_reversed','custom_type'
];
var typeDroneLabel = [
    'Quad Plus','Quad X','Octo Plus','Octo X','Octo Square Plus',
    'Octo Scuare X','Octo Colinear Plus','Octo Colinear X','Octo Coax Plus',
    'Octo Coax X(X8)','Hexa Plus','Hexa X','Hexa H','Hexa Coax(Y6)','Hexa Coax Reversed','Custom Type'
];
/*function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdivName = document.createElement('div');
          var newdivDistance = document.createElement('div');
          var newDivMass = document.createElement('div');

          newdivName.className = "col-md-4 distance-field label-div-name";
          newdivDistance.className = "col-md-4 distance-field label-div-distance";
          newDivMass.className = "col-md-4 distance-field label-div-mass";

         newdivName.innerHTML =
             '<label class="" for="name-field-'+(counter+1)+'">Name:</label>' +
             '<input id='+'name-field-'+(counter+1)+' class="col-md-6 form-control element-name" type="text" value="motor" name="element-name-'+(counter+1)+'">';
         newdivDistance.innerHTML =
             '<label class="" for="distance-field-'+(counter+1)+'">Distance:</label>' +
             '<input id='+'distance-field-'+(counter+1)+' class="col-md-6 form-control element-distance" type="text" name="element-distance-'+(counter+1)+'">';
         newDivMass.innerHTML =
             '<label class="" for="mass-field-'+(counter+1)+'">Mass:</label>' +
             '<input id='+'mass-field-'+(counter+1)+' class="col-md-6 form-control element-mass" type="text" name="element-mass-'+(counter+1)+'">';

         document.getElementById(divName).appendChild(newdivName);
         document.getElementById(divName).appendChild(newdivDistance);
         document.getElementById(divName).appendChild(newDivMass);
         counter++;
     }
}
function removeInput(){
  if(counter < 1){
    alert("To low inputs");
  }else{
    var removeDiv = $('.distance-field');
    removeDiv.slice(-3).remove();
  }
}*/
// END DISTANCE SECTION
/*******************************************************************************/
// ROTORS SECTION
var numberTypesDrone = typesDrone.length;
var getDroneType = $('#drone-type').val();
function addRotors(rotorGrid) {
    getDroneType = $('#drone-type').val();
    if(getDroneType == 'select_type'){
        $('.rotor-grid').remove();
    }else{
        $('.rotor-grid').remove();
        for(var i = 0; i <= numberTypesDrone; i++){
            if(getDroneType == typesDrone[i]){
                var droneTypeScheme = document.createElement('div');
                var droneTypeDescrip = document.createElement('div');
                droneTypeScheme .className = "col-md-6 col-lg-6 form-group rotor-grid";
                droneTypeDescrip.className = "col-md-6 col-lg-6 form-group rotor-grid";
                droneTypeScheme .innerHTML =
                    '<div class="panel panel-default">'+
                        '<div class="panel-body">'+
                            '<h3 class="panel-title">'+(typeDroneLabel[i])+'</h3>'+
                        '</div>'+
                        '<div class="panel-footer">' +
                            '<img id="" src="./img/drone-type/'+(getDroneType)+'.png" width="325" height="325" >'+
                        '</div>'+
                    '</div>';
                if(getDroneType.indexOf('coax')!=-1){
                    droneTypeDescrip.innerHTML =
                        '<div class="panel panel-default">'+
                            '<div class="panel-body">'+
                                '<h3 class="panel-title">Double rotors with different direction of rotation</h3>'+
                            '</div>'+
                            '<div class="panel-footer">' +
                                '<div class="img-responsive img-circle xxx"><img class="rotor-image-right dual-rotationR" src="./img/drone-type/rotor_red.png"><img class="rotor-image-left dual-rotationL" src="./img/drone-type/rotor_blue.png"><h6 class="well well-sm">Direction of rotation "From Left to Right"</h6></div>' +
                                '<div class="img-responsive img-circle xxx"><img class="rotor-image-left  dual-rotationR " src="./img/drone-type/rotor_blue.png"><img class="rotor-image-right dual-rotationL" src="./img/drone-type/rotor_red.png"><h6 class="well well-sm">Direction of rotation "From Right to Left"</h6></div>'+
                            '</div>'+
                        '</div>';
                    document.getElementById(rotorGrid).appendChild(droneTypeScheme);
                    document.getElementById(rotorGrid).appendChild(droneTypeDescrip);
                }else {
                    droneTypeDescrip.innerHTML =
                        '<div class="panel panel-default">'+
                        '<div class="panel-body">'+
                        '<h3 class="panel-title">Single Rotors with different direction of rotation</h3>'+
                        '</div>'+
                        '<div class="panel-footer">' +
                        '<div class="img-responsive img-circle"><img class="rotor-image-right" src="./img/drone-type/rotor_red.png"><h6 class="well well-sm">Direction of rotation "From Left to Right"</h6></div>' +
                        '<div class="img-responsive img-circle"><img class="rotor-image-left" src="./img/drone-type/rotor_blue.png"><h6 class="well well-sm">Direction of rotation "From Right to Left"</h6></div>'+
                        '</div>'+
                        '</div>';
                    document.getElementById(rotorGrid).appendChild(droneTypeScheme);
                    document.getElementById(rotorGrid).appendChild(droneTypeDescrip);
                }
            }
        }
    }
/*    droneType = getDroneType.val();
    if (getDroneType == 'select_type'){
        $('.rotor-grid').remove();
    }else {
        droneType = getDroneType.val();
        if(droneType == typesDrone[0]){
            $('.rotor-grid').remove();
             droneTypeScheme = document.createElement('div');
            droneTypeScheme.className = "col-md-12 col-lg-12 form-group rotor-grid";
            droneTypeScheme.innerHTML = '<label class="" for="rotor-plus-'+(rotorCounter+1)+'">'+'<img id="" src="./img/drone-type/quad-plus" class="" >' + '</label>';
            document.getElementById(rotorGrid).appendChild(droneTypeScheme);
        }else if(droneType == typesDrone[1]){
            $('.rotor-grid').remove();
            droneTypeScheme = document.createElement('div');
            droneTypeScheme.className = "col-md-12 col-lg-12 form-group rotor-grid";
            droneTypeScheme.innerHTML = '<label class="" for="rotor-plus-'+(rotorCounter+1)+'">'+'<img id="" src="./img/drone-type/quad-x" class="" >' + '</label>';
            document.getElementById(rotorGrid).appendChild(droneTypeScheme);
        }else if (droneType == typesDrone[2]){
            $('.rotor-grid').remove();
            droneTypeScheme = document.createElement('div');
            droneTypeScheme.className = "col-md-12 col-lg-12 form-group rotor-grid";
            droneTypeScheme.innerHTML = '<label class="" for="rotor-plus-'+(rotorCounter+1)+'">'+'<img id="" src="./img/drone-type/octo_plus.png" class="" >' + '</label>';
            document.getElementById(rotorGrid).appendChild(droneTypeScheme);
        }else if(droneType == typesDrone[3]){
            $('.rotor-grid').remove();
            droneTypeScheme = document.createElement('div');
            droneTypeScheme.className = "col-md-12 col-lg-12 form-group rotor-grid";
            droneTypeScheme.innerHTML = '<label class="" for="rotor-plus-'+(rotorCounter+1)+'">'+'<img id="" src="./img/drone-type/octo_x.png" class="" >' + '</label>';
            document.getElementById(rotorGrid).appendChild(droneTypeScheme);
        }else if(droneType == typesDrone[4]){
            $('.rotor-grid').remove();
            for(rotorCounter = 0; rotorCounter<16; rotorCounter++){
                newRotorPlus = document.createElement('div');
                newRotorMinus = document.createElement('div');
                newRotorPlus.className = "col-md-6 col-lg-6 form-group rotor-grid";
                newRotorMinus.className = "col-md-6 col-lg-6 form-group rotor-grid";
                newRotorPlus.innerHTML =
                    '<label class="" for="rotor-plus-'+(rotorCounter+1)+'">Rotations(+1): <img src="./img/rotor-right.png" class="rotor-image-right" ></label>' ;
                newRotorMinus.innerHTML =
                    '<label class="" for="rotor-minus-'+(rotorCounter+1)+'">Rotations(-1): <img src="./img/rotor-left.png" class="rotor-image-left" ></label>';                document.getElementById(rotorGrid).appendChild(newRotorPlus);
                document.getElementById(rotorGrid).appendChild(newRotorMinus);
                rotorCounter++
            }
        }
    }*/
}
// END ROTORS SECTION
/*******************************************************************************/
// MASS SECTION
function addMassRow(massRow){
    if (counter == limit)  {
        alert("You have reached the limit of adding " + counter + " mass row");
    }else{
        var inputName = document.createElement('div'),
            dimX =      document.createElement('div'),
            dimY =      document.createElement('div'),
            dimZ =      document.createElement('div'),
            offsetX =   document.createElement('div'),
            offsetY =   document.createElement('div'),
            offsetZ =   document.createElement('div'),
            massValue = document.createElement('div');
           // sliderButtun =document.createElement('div');

            inputName.className = "col-md-3 mass-row-field ";
            dimX.className      = "col-md-1 mass-row-field";
            dimY.className      = "col-md-1 mass-row-field";
            dimZ.className      = "col-md-1 mass-row-field";
            offsetX.className   = "col-md-1 mass-row-field";
            offsetY.className   = "col-md-1 mass-row-field";
            offsetZ.className   = "col-md-1 mass-row-field";
            massValue.className = "col-md-3 mass-row-field";
           // sliderButton.id = "mass-slider-dim"+axes[0]+++"";

        inputName.innerHTML =
            '<label class="" for="mass-name-'+(counterMass+1)+'">Name</label>' +
            '<input id='+'mass-name-'+(counterMass+1)+' class="col-md-2 form-control mass-cube " type="text" name="mass-name-'+(counterMass+1)+'">';
        dimX.innerHTML =
            '<label class="" for="slider-dimX-'+(counterMass+1)+'">dimX</label>' +
            '<input id='+'input-dimX-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-dimX-'+(counterMass+1)+'">'+
            '<div id="slider-dimX-'+(counterMass+1)+'"></div>';
        dimY.innerHTML =
            '<label class="" for="input-dimY-'+(counterMass+1)+'">dimY</label>' +
            '<input id='+'input-dimY-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-dimY-'+(counterMass+1)+'">'+
            '<div id="slider-dimY-'+(counterMass+1)+'"></div>';
        dimZ.innerHTML =
            '<label class="" for="input-dimZ-'+(counterMass+1)+'">dimZ</label>' +
            '<input id='+'input-dimZ-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-dimZ-'+(counterMass+1)+'">'+
            '<div id="slider-dimZ-'+(counterMass+1)+'"></div>';
        offsetX.innerHTML =
            '<label class="" for="input-offsetX-'+(counterMass+1)+'">offsetX</label>' +
            '<input id='+'input-offsetX-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-offsetX-'+(counterMass+1)+'">'+
            '<div id="slider-offsetX-'+(counterMass+1)+'"></div>';
        offsetY.innerHTML =
            '<label class="" for="slider-offsetY-'+(counterMass+1)+'">offsetY</label>' +
            '<input id='+'input-offsetY-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-offsetY-'+(counterMass+1)+'">'+
            '<div id="slider-offsetY-'+(counterMass+1)+'"></div>';
        offsetZ.innerHTML =
            '<label class="" for="slider-offsetZ-'+(counterMass+1)+'">offsetZ</label>' +
            '<input id='+'input-offsetZ-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="input-offsetZ-'+(counterMass+1)+'">'+
            '<div id="slider-offsetZ-'+(counterMass+1)+'"></div>';
        massValue.innerHTML =
            '<label class="" for="mass-value-'+(counterMass+1)+'">Value</label>' +
            '<input id='+'mass-value-'+(counterMass+1)+' class="col-md-1 form-control" type="text" name="mass-value-'+(counterMass+1)+'">';

        document.getElementById(massRow).appendChild(inputName);
        document.getElementById(massRow).appendChild(dimX);
        document.getElementById(massRow).appendChild(dimY);
        document.getElementById(massRow).appendChild(dimZ);
        document.getElementById(massRow).appendChild(offsetX);
        document.getElementById(massRow).appendChild(offsetY);
        document.getElementById(massRow).appendChild(offsetZ);
        document.getElementById(massRow).appendChild(massValue);
    }
    counterMass++;
}
function removeMassRow(){
    if(counter < 1){
        alert("To low Mass Row");
    }else{
        var removeMavRow = $('.mass-row-field');
        removeMavRow.slice(-8).remove();
    }
}
// END MASS SECTION
/*******************************************************************************/
//READY FUNCTION JQUERY
$(document).ready(function () {


});
