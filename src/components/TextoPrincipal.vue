<template>

    <head>
        <title> forms</title>
        <meta name="viewport" content="width=devic-width">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
        
    </head>

    <body>
        <h2 id="titulo">As Paisagens</h2>
    </body>

</template>


<script>
export default{
    name: 'TextoPrincipal',
    props: {
        msg: String
    }
};
</script>


<style>
#imagens_baixo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

img {
    margin: 5px;
}

#imagen_cima {
    display: flex;
    justify-content: center;
}

#titulo {
    display: flex;
    justify-content: center;
    size: 65px;
}

@media (max-width: 800px) {
    #imagens_baixo {
        display: flex;
        flex-direction: column;
    }

    .pequenas {
        width: 400px;
    }
}
</style>