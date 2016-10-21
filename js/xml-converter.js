/**
 * Created by Satellite L50 on 10/10/2016.
 */
function generatXML(){

    var constructiveXML = new  XMLWriter( 'UTF-8', '1.0' );
    var elementName = document.querySelectorAll(".element-name").length;
    var getAllMassCube = document.querySelectorAll(".mass-cube").length;

    //OPEN DOCUMENT XML
    constructiveXML.writeStartDocument(true);
    constructiveXML.writeStartElement('quatos_configuration');
    constructiveXML.writeStartElement( 'craft');
    constructiveXML.writeAttributeString('id',getNameDrone());
    constructiveXML.writeAttributeString('config',getType());
    //PORTS TAG
    constructiveXML.writeStartElement('ports');
    //PORT TAG
    var rotorNum = 1;
    if(getNumRotors() == 4){
        var pluse = '+';
        for(var r =0; r<=3; r++){
            var rotorNumStr =(rotorNum++).toString();
            if ((r % 2) !== 0){ pluse= '-';}else{pluse= '+';}
            constructiveXML.writeStartElement('port');
            constructiveXML.writeString(rotorNumStr);
            constructiveXML.writeAttributeString('rotation', pluse+'1');
            constructiveXML.writeEndElement();
        }
    }else if(getNumRotors() == 6){
        for(r =0; r<=5; r++){
            rotorNumStr =(rotorNum++).toString();
            if ((r % 2) !== 0){ pluse= '-';}else{pluse= '+';}
            constructiveXML.writeStartElement('port');
            constructiveXML.writeString(rotorNumStr);
            constructiveXML.writeAttributeString('rotation', pluse+'1');
            constructiveXML.writeEndElement();
        }
    }else if(getNumRotors() == 8){
        for(r =0; r<=7; r++){
            rotorNumStr =(rotorNum++).toString();
            if ((r % 2) !== 0){ pluse= '-';}else{pluse= '+';}
            constructiveXML.writeStartElement('port');
            constructiveXML.writeString(rotorNumStr);
            constructiveXML.writeAttributeString('rotation', pluse+'1');
            constructiveXML.writeEndElement();
        }
    }else if(getNumRotors() == 12){
        for(r =0; r<=11; r++){
            rotorNumStr =(rotorNum++).toString();
            if ((r % 2) !== 0){ pluse= '-';}else{pluse= '+';}
            constructiveXML.writeStartElement('port');
            constructiveXML.writeString(rotorNumStr);
            constructiveXML.writeAttributeString('rotation', pluse+'1');
            constructiveXML.writeEndElement();
        }
    }else if(getNumRotors() == 16){
        for(r =0; r<=15; r++){
            rotorNumStr =(rotorNum++).toString();
            if ((r % 2) !== 0){ pluse= '-';}else{pluse= '+';}
            constructiveXML.writeStartElement('port');
            constructiveXML.writeString(rotorNumStr);
            constructiveXML.writeAttributeString('rotation', pluse+'1');
            constructiveXML.writeEndElement();
        }
    }
    constructiveXML.writeEndElement();
    //DISTANCE TAG
    constructiveXML.writeStartElement('distance');
    for(var i = 0; i<elementName; i++){
        constructiveXML.writeElementString(getNameDistance(i+1), getDistance(i+1));
    }
    constructiveXML.writeEndElement();
    //MASS TAG
    constructiveXML.writeStartElement('mass');
    for( i = 0; i<elementName; i++){
        constructiveXML.writeElementString(getNameDistance(i+1), getMassElement(i+1));
    }
    for(var c = 0; c < getAllMassCube; c++){
        constructiveXML.writeStartElement('cube');
        constructiveXML.writeString(getMassValue(c+1));
        constructiveXML.writeAttributeString('name',getMassName(c+1));
        constructiveXML.writeAttributeString('dimx',getDimX(c+1));
        constructiveXML.writeAttributeString('dimy',getDimY(c+1));
        constructiveXML.writeAttributeString('dimz',getDimZ(c+1));
        constructiveXML.writeAttributeString('offsetx',getoffsetX(c+1));
        constructiveXML.writeAttributeString('offsety',getoffsetY(c+1));
        constructiveXML.writeAttributeString('offsetz',getoffsetZ(c+1));
        constructiveXML.writeEndElement();
    }
    constructiveXML.writeEndElement();
    constructiveXML.writeEndElement();
    constructiveXML.writeEndElement();
    //CLOSE DOCUMENT XML
    constructiveXML.writeEndDocument();


    var  asString = "";
    if (typeof XMLSerializer !== 'undefined') {
        window.asString = new XMLSerializer().serializeToString(constructiveXML.getDocument());
    } else {
        window.asString = constructiveXML.getDocument().xml;
    }


    //FUNCTIONS GET VALUES
    function getNameDrone (droneName) {
        droneName = $('#nameDrone').val();
        return droneName;
    }

    function getType (droneType) {
        droneType = $('#type').val();
        return droneType;
    }

    function getNumRotors(numRotors) {
        numRotors = $('#NumRotations').val();
        return numRotors;
    }

    function getNameDistance (index){
        var getNameDistance = $('#name-field-'+(index)+'').val();
        return getNameDistance;
    }

    function getDistance (index) {
        var getDistance = $('#distance-field-'+(index)+'').val();
        return getDistance;
    }

    function getMassElement (indexx) {
        var getMass = $('#mass-field-'+(indexx)+'').val();
        return getMass;
    }
    function getMassName (indexx) {
        var massName = $('#mass-name-'+(indexx)+'').val();
        return massName;
    }

    function getDimX (indexx) {
        var dimX = $('#input-dimX-'+(indexx)+'').val();
        return dimX;
    }

    function getDimY (indexx) {
        var dimY = $('#input-dimY-'+(indexx)+'').val();
        return dimY;
    }

    function getDimZ (indexx) {
        var dimZ = $('#input-dimZ-'+(indexx)+'').val();
        return dimZ;
    }

    function getoffsetX (indexx) {
        var offsetX = $('#input-offsetX-'+(indexx)+'').val();
        return offsetX;
    }

    function getoffsetY (indexx) {
        var offsetY = $('#input-offsetY-'+(indexx)+'').val();
        return offsetY;
    }

    function getoffsetZ (indexx) {
        var offsetZ = $('#input-offsetZ-'+(indexx)+'').val();
        return offsetZ;
    }

    function getMassValue(indexx) {
        var getMassValue = $('#mass-value-'+(indexx)+'').val();
        return getMassValue;

    }
}

function storeDataDrone(name, type) {
    var downloadButton = document.getElementById("downloadDroneData");
    var file = new Blob([asString], {type: type});
    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = name;
    alert('Your File  has ben success created !')
}