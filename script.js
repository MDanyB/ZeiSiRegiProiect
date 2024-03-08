let MaxImages = 10;
let MinImages = 1;

let CurrenctImage = 1;

let PageCounter = document.getElementById("PageNumber");

let MenuPage = document.getElementById("Menu_Image");
let Page2 = document.getElementById("2_Image");
let Page3 = document.getElementById("3_Image");
let Page4 = document.getElementById("4_Image");
let Page5 = document.getElementById("5_Image");
let Page6 = document.getElementById("6_Image");
let Page7 = document.getElementById("7_Image");
let Page8 = document.getElementById("8_Image");
let Page9 = document.getElementById("9_Image");
let Page10 = document.getElementById("10_Image");



let MinusImage = false
let PlusImage = false



function ForwardImage() {
    
    

    if (CurrenctImage == MaxImages) {
        CurrenctImage = MaxImages

        return
    }

    CurrenctImage ++
    console.log(CurrenctImage)

    PageCounter.textContent = "Pagina: " + CurrenctImage + " / " + MaxImages

    if (CurrenctImage == 2) {

        MenuPage.style.display = "None"
        Page2.style.display = "InLine"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 3) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "InLine"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 4) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "InLine"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 5) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "InLine"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 6) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "InLine"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 7) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "InLine"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 8) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "InLine"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 9) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "InLine"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 10) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "InLine"

    }

    

    

}

function BackImage() {

    if (CurrenctImage == MinImages) {
        CurrenctImage  = MinImages
        return
    }
    CurrenctImage --
    console.log(CurrenctImage)

    PageCounter.textContent = "Pagina: " + CurrenctImage + " / " + MaxImages

    if (CurrenctImage == 1) {

        MenuPage.style.display = "InLine"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 2) {

        MenuPage.style.display = "None"
        Page2.style.display = "InLine"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 3) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "InLine"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 4) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "InLine"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 5) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "InLine"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 6) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "InLine"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 7) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "InLine"
        Page8.style.display = "None"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 8) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "InLine"
        Page9.style.display = "None"
        Page10.style.display = "None"

    }

    if (CurrenctImage == 9) {

        MenuPage.style.display = "None"
        Page2.style.display = "None"
        Page3.style.display = "None"
        Page4.style.display = "None"
        Page5.style.display = "None"
        Page6.style.display = "None"
        Page7.style.display = "None"
        Page8.style.display = "None"
        Page9.style.display = "InLine"
        Page10.style.display = "None"

    }




    
}