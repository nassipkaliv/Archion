ymaps.ready(init);
function init(){ 

    template = ymaps.templateLayoutFactory.createClass("<div style='transform: scale(2)' class='obj_icon'></div>")
    templateHover = ymaps.templateLayoutFactory.createClass("<div class='obj_icon obj_icon--hover'></div>")
    templateUnhover = ymaps.templateLayoutFactory.createClass("<div class='obj_icon obj_icon--unhover'></div>")

    var hmkPlacemark = new ymaps.Placemark([55.734992, 37.614454], {}, {
        iconLayout: template,
        iconImageHref: false,
        iconImageSize: [40, 60],
        iconOffset:[0,-50],
        // iconShape: {   
        //         type: 'Polygon',
        //         coordinates: [
        //             [[0,-50],[30,0],[30,42],[0,42]]
        //         ]
        //     }55.73489244910513, 37.61445499953177
    });
    

    var hmkMap = new ymaps.Map("obj_map", {
                center: [55.735031, 37.611280],
                zoom: 17
    });

    hmkMap.geoObjects.add(hmkPlacemark);
    hmkMap.behaviors.disable('scrollZoom'); 
}
 