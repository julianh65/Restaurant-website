const loadMenu = function() {
    const rightSideRef = document.querySelector("#rightSide");
    console.log("loading menu");



    rightSideRef.innerHTML = `

    <div id="menu">
    <div id="menuTitle"><h2>Menu</h2>
    </div>
    <div id="starters"><h3>Starters</h3>
            <p>Aurier Tomatoes - $28.00</p>
            <p>Ndombele Salad - $16.00</p>
            <p>Candy Kane - $34.00</p>
            <p>Sun Son - $29.00</p>
    </div>
    <div id="entrees"><h3>Entrees</h3>
            <p>Lloris Steak - $58.00</p>
            <p>Jose Bose - $94.00</p>
            <p>Sess Chicken - $39.00</p>
            <p>Sissoko Moussaka - $59.00 </p>
    </div>
    </div>

    
    `;

}


export{ loadMenu }

