 $(document).ready(function() 
{
    $('select').material_select();
    $('.boton').click(function()
    {
        $('#js_w_pais').empty();
        $('#js_w_temp').empty();
        $('#js_w_desc').empty();
        $('#js_w_hum').empty();
        $('#js_w_lat').empty();
        $('#js_w_lon').empty();
        
       var pais = $('select').val();

       var app = {};
       app.apikey = "10c3497e0de9fadad435135094d66728";
       app.url = "http://api.openweathermap.org/data/2.5/weather?q="+pais+"&APPID=" + app.apikey;
       $.ajax({
            type: "GET",
            dataType: "json",
            url: app.url,
        })
         .done(function( data, textStatus, jqXHR ) {
             if ( console && console.log ) 
             {
                 console.log(app.url);
                 app.datos = data;
                 app.procesaDatos();
                 console.log( "La solicitud se ha completado correctamente." );
             }
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud a fallado: " +  textStatus);
             }
        });
        //creamos el objeto app
        app.procesaDatos = function()
        {
            app.pais = app.datos.name;
            app.temperatura = app.datos.main.temp, 10;
            app.desc = app.datos.weather[0].description;
            app.hume = app.datos.main.humidity;
            app.lon = app.datos.coord.lon;
            app.lat = app.datos.coord.lat;
            app.muestra();
        }

        //Muentra datos
        app.muestra = function()
        {
            $('#js_w_pais').append(" Capital: " + app.pais );
            $('#js_w_temp').append(" Temperatura: " + app.temperatura ); 
            $('#js_w_desc').append(" Descripcion: " + app.desc ); 
            $('#js_w_hum').append(" Humedad: " + app.hume ); 
            $('#js_w_lat').append(" Latitud: " + app.lat ); 
            $('#js_w_lon').append(" Longitud: " + app.lon ); 
        }

        app.obtenIcono = function( weatherIcon ) 
        {
            var icon;
            switch( weatherIcon )
            {
                case "01d":
                    icon = "wi-day-sunny";
                    break;
                case "01n":
                    icon = "wi-day-sunny";
                    break;
                case "02d":
                case "02n":
                    icon = "wi-day-cloudy";
                break;
            }
            return icon;
        } 
    });    
});
