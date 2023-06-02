# DragAndDrop



## Installation

Para la instalacion arrastrar el fichero dragAndDrop.js hasta la carpeta del proyecto.

```htmlembedded
    <script src="./dragAndDrop.js"></script>
```

## Usage

Para utilizarlo nesecitas tener vaios divs con la clase "empty", y dentro de una de ellas el objeto que quieres que sea arrastrable con la clase "fill" y que sea draggable.

```htmlembedded
    <div class="empty">
        <div class="fill" draggable="true"></div>
    </div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
    <div class="empty"></div>
```

En el css se deben crear las clases "fill", "hold", y "hovered" donde "hold" es el estado cuando se encuentra siendo arrastrando, "hovered" hace referencia a la celda cuando el elemento se encuentra siendo arrastrado pero encima de ella, y "fill" donde se muestra el elemento.

## License

[MIT](https://choosealicense.com/licenses/mit/)