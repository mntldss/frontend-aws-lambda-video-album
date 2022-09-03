# Youtube Video Album

En el presente repositorio encontraras el frontend del proyecto Youtube Video Album,
 el cual es a grandes razgos, una aplicacion web hecha en REACT y Typescript , desplegada en Heroku la cual realiza diferentes flujos de Videos, consumiendo YOUTUBE API y su respectivo backend.

 ## Pre-requisitos 📋
- Tener una copia del proyecto en tu maquina
- [Node.JS](https://nodejs.org/es/)

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en tu máquina :grin:

## Instalación 🔧

En una terminal pocisionada en el directorio del proyecto, debes ejecutar:
```
$ npm install
```

### Despliegue 📦

```
$ npm run start
```

La aplicacion iniciara por defecto en `http://localhost:3000` en tu navegador web.
![image](https://user-images.githubusercontent.com/31327706/188284457-1dc2c20c-7fbd-4de9-83a1-318eea7e74ab.png)


## Ejecutando las pruebas ⚙️
### **Agregar un video**
Para poder agregar un video, debemos realizar lo siguente:

- Se debe ingresar una url de youtube valida `https://www.youtube.com/watch?v=`{ID_VIDEO} `https://youtu.be/`{ID_VIDEO}
- Presionar boton Añadir

![image](https://user-images.githubusercontent.com/31327706/188284497-f46134b7-2820-4187-9222-c58ed4bac83b.png)

El video agregado se refleja en la lista de videos

![image](https://user-images.githubusercontent.com/31327706/188284333-34b49aa3-ecb5-4bf0-9429-6851584fafec.png)

Al repetir el flujo, el nuevo video se mostrara como el primer elemento en la lista.

![image](https://user-images.githubusercontent.com/31327706/188284555-2c31a14e-06f9-4223-b9cd-21fa216dcbb3.png)

### **Mostrar informacion de un video**
Para poder ver la informacion de un video de la lista, debemos realizar lo siguiente:

- Hacer click en el video del cual queramos ver la informacion

Se desplegara una ventana modal con la informacion.

![image](https://user-images.githubusercontent.com/31327706/188284642-ae974faa-f6ab-4341-a625-7d68e6b87b86.png)

Para cerrar el modal solamente debemos presionar la **X**

![image](https://user-images.githubusercontent.com/31327706/188284672-af16686e-07fe-4b52-8019-6a41801d8f55.png)

### **Ver un video**
Para ver un video de la lista, debemos realizar lo siguiente:

Una vez desplegada la informacion (**Mostrar informacion de un video**)
- Hacer click en la imagen y este se abrira.

![image](https://user-images.githubusercontent.com/31327706/188284751-ff6eda24-26c9-412f-9708-43ed86417320.png)

- presionamos boton reproducir

![image](https://user-images.githubusercontent.com/31327706/188284778-fe5c0986-40a5-45da-8355-0545fbce0729.png)

### **Eliminar un video**
Para eliminar un video de la lista, debemos realizar lo siguiente:

- presionar la **X** ubicada en la esquina superior derecha de cada video de la lista.

![image](https://user-images.githubusercontent.com/31327706/188284878-b0b179fa-3e95-4ec7-95b0-45ff253c7438.png)

- Presionar boton *Eliminar* del modal desplegado

![image](https://user-images.githubusercontent.com/31327706/188284913-869a57c6-c5cd-43ec-9d44-2dc16bf23a52.png)

Como resultado el video se elimina de la lista

![image](https://user-images.githubusercontent.com/31327706/188284926-349eec53-9579-426c-8832-836a7bee4e96.png)

## Construido con :heart:&:coffee:
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/es/)
- [aws-lambda](https://aws.amazon.com/es/lambda/)
- [DynamoDB](https://aws.amazon.com/es/dynamodb)
- [serverless](https://www.serverless.com/framework/docs/getting-started)
- [Middy](https://middy.js.org/)


## Versionado 📌

Por el momento no se encuentra versionado, pero se utilizara [samver](https://samver.org/). Para todas las versiones disponibles.

# Autores ✒️

Roberto Vega - Trabajo Inicial

Roberto Vega - Documentación

También puedes mirar la lista de todos los contribuyentes quiénes han participado en este proyecto.

## Licencia 📄

Este proyecto no se encuentra bajo ninguna Licencia.