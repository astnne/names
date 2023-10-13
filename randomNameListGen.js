body {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    background-color: white;
    padding: 10px;
}

.namesFont {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
} button {
    border: none;
    background-color: rgba(233, 233, 233, 0.556);
    border-radius: 100px;
    padding: 15px 20px;
    margin: 5px;
    font-size: larger;
} button:hover {
    cursor: pointer;
    border: black;
}

.refresh:default {
    color: black;
    text-decoration: none;
} .refresh:visited {
    color: black;
    text-decoration: none;
}

.elements1, .elements2, .elements3 {
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 7px 10px;
    margin: 3px 8px;
}
/* MOBILE CODE UP THERE */

/* DESKTOP CODE DOWN HERE */
@media screen and (min-width: 699px) {
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;
        background-color: white;
        padding: 45px;
    }

    .namesFont {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
    } button {
        border: none;
        background-color: rgba(233, 233, 233, 0.556);
        border-radius: 100px;
        padding: 15px 20px;
        margin: 5px;
        font-size: larger;
    } button:hover {
        cursor: pointer;
        border: black;
    }
    
    .refresh:default {
        color: black;
        text-decoration: none;
    } .refresh:visited {
        color: black;
        text-decoration: none;
    }
    
    .elements1, .elements2, .elements3 {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 15px 20px;
        margin: 5px 12px;
    } 
}
