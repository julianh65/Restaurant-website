
const loadContact = function() {
    const rightSideRef = document.querySelector("#rightSide");
    console.log("loading contact");

    rightSideRef.innerHTML = `
    <div id="contactContainer">
    <h2>Phone</h2>
    <p>937 485 39849</p>
    <h2>Address</h2>
    <p>459 White Hart Lane</p>
    <h2>Email</h2>
    <p>GedsonFernandes@gmoogle.com</p>
</div>
`;

}


export{ loadContact }