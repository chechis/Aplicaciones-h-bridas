var libros_biblioteca = {
  "libros": [
    {
      "codigo": "0834RSO",
      "titulo": "Excepteur sint occaecat cupidatat",
      "editorial": "Programming Books",
      "fecha_publicacion": "18/02/1990",
      "edicion": "1era edición",
      "estado": "inactivo",
      "numero_paginas": 180,
      "numero_copias": 6,
      "autores": [
        {
          "nombre": "Eum Iure",
          "fecha_nacimiento": "12/07/1967",
          "nacionalidad": "Alemán"
        },
        {
          "nombre": "Autem vel",
          "fecha_nacimiento": "01/11/1952",
          "nacionalidad": "Irlandés"
        }
      ]
    },
    {
      "codigo": "093E1D2",
      "titulo": "Ipsum quia dolor sit am",
      "editorial": "Programming Books",
      "fecha_publicacion": "10/10/1994",
      "edicion": "2da edición",
      "estado": "activo",
      "numero_paginas": 240,
      "numero_copias": 2,
      "autores": [
        {
          "nombre": "Finibus Bonorum",
          "fecha_nacimiento": "03/12/1940",
          "nacionalidad": "Ruso"
        },
        {
          "nombre": "Totam Rem Aperiam",
          "fecha_nacimiento": "11/08/1970",
          "nacionalidad": "Turco"
        }
      ]
    },
    {
      "codigo": "03A18B",
      "titulo": "Lorem ipsum",
      "editorial": "Programming Books",
      "fecha_publicacion": "03/03/1996",
      "edicion": "2da edición",
      "estado": "activo",
      "numero_paginas": 250,
      "numero_copias": 6,
      "autores": [
        {
          "nombre": "Amet indolorum",
          "fecha_nacimiento": "10/11/1956",
          "nacionalidad": "Griego"
        },
        {
          "nombre": "Richard McClintoc",
          "fecha_nacimiento": "09/09/1945",
          "nacionalidad": "Inglés"
        }
      ]
    }
  ]
};

alert("El libro " + libros_biblioteca.libros[0].titulo + " tiene el código " + libros_biblioteca.libros[0].codigo + " y fue publicado el " + libros_biblioteca.libros[0].fecha_publicacion);
