(function(){
            
    var json = {
        "datos":[
            {
                "image":"nasaR3107_1000x1000.jpg",
                "name":"Dr. Paul Armstrong",
                "position":"Dental Hygienist",  
                "description":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
                "email":"paul.armstrong@cardumen.cl",
                "rrss":[
                    {
                        "icon":"",
                        "link":"facebook"
                    },
                    {
                        "icon":"",
                        "link":"Twitter"
                    },
                    {
                        "icon":"",
                        "link":"Linkedin"
                    },
                    {
                        "icon":"",
                        "link":"Instagram"
                    },
                
                ]
            },
            {
                "image":"nasaR3107_1000x1000.jpg",
                "name":"Dr. Beatrice Prior",
                "position":"Dental Hygiorist",  
                "description":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
                "email":"paul.armstrong@cardumen.cl",
                "rrss":[
                    {
                        "icon":"",
                        "link":"facebook"
                    },
                    {
                        "icon":"",
                        "link":"Twitter"
                    },
                    {
                        "icon":"",
                        "link":"Linkedin"
                    },
                    {
                        "icon":"",
                        "link":"Instagram"
                    },
                
                ]
            }, 
            {
                "image":"nasaR3107_1000x1000.jpg",
                "name":"Dr Peter Parker",
                "position":"Dental Hygiorist",  
                "description":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
                "email":"paul.armstrong@cardumen.cl",
                "rrss":[
                    {
                        "icon":"",
                        "link":"facebook"
                    },
                    {
                        "icon":"",
                        "link":"Twitter"
                    },
                    {
                        "icon":"",
                        "link":"Linkedin"
                    },
                    {
                        "icon":"",
                        "link":"Instagram"
                    },
                
                ]
            } ,
            {
                "image":"nasaR3107_1000x1000.jpg",
                "name":"Dr. Liza Thomas",
                "position":"Orthopedic Surgeon",  
                "description":"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
                "email":"paul.armstrong@cardumen.cl",
                "rrss":[
                    {
                        "icon":"",
                        "link":"facebook"
                    },
                    {
                        "icon":"",
                        "link":"Twitter"
                    },
                    {
                        "icon":"",
                        "link":"Linkedin"
                    },
                    {
                        "icon":"",
                        "link":"Instagram"
                    },
                
                ]
            } 
        ]
    }
    
    /* ================================= 
    Carga Perfiles
==================================== */
    var html = "";
    var data = json['datos'];
    for (var i = 0; i < data.length; i++){
        html +="<div class='Col Col-12 Col-3'>";
        html +="<div class='Content-dc'>";
        html +="<img src='Assets/Images/"+data[i]['image']+"' style='width: 100%'/>";
        html +="<p class='tx-position'>"+data[i]['position']+"</p>";
        html +="<p class='tx-name'>"+data[i]['name']+"</p>";
        html +="<div class='Content-rrss'>";
        var rrss = data[i]['rrss'];
            for (var e = 0; e < rrss.length; e++){
                html +="<a href='"+rrss[e]['link']+"' target='_blank'><span>"+rrss[e]['icon']+"</span></a>";
            }
        html +="</div>";
        html +="</div>";
        html +="</div>";
    }
    document.getElementById("content").innerHTML = html;


    /* ================================= 
    Carga Slider
==================================== */
    var htmlSlider = "";
    for (var j = 0; j < data.length; j++){
        var active = j == 0 ? 'active' : '';
        htmlSlider +='<div class="slider-item '+active+'"><div class="Row"><div class="Col Col-12 Col-6">';
        htmlSlider +='<h2 class="tx-title">'+data[j]['name']+'</h2>';
        htmlSlider +='<p class="sb-title">'+data[j]['position']+'</p>';
        htmlSlider +='<p class="tx-content">'+data[j]['description']+'</p>';
        htmlSlider +='<div class="Row sinPadding">';
        htmlSlider +='<div class="Col-12 Col-3"><input type="button" class="btn" value="Email Us"></div>';
        htmlSlider +='<div class="Col-12 Col-3"><input type="button" class="btn" value="Make an appointment"></div>';
        htmlSlider +='</div>';
        htmlSlider +='</div>';
        htmlSlider +='<div class="Col Col-12 Col-6">';
        htmlSlider +='<img src="Assets/Images/'+data[j]['image']+'" class="img-responsive" style="width: 100%"/>';
        htmlSlider +='</div>';
        htmlSlider +='</div></div>';
    }
    document.getElementById("slider").innerHTML = htmlSlider;

    
})();