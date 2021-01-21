{
    "user strict";

    let submit = document.querySelector("[type=submit]");

    let checkbox = document.querySelectorAll("[type=checkbox]");

    let message = document.getElementById("message");
    let ln = document.getElementById("lastName");
    let fn = document.getElementById("firstName");
    let age = document.getElementById("age");
    let mail = document.getElementById("mail");
    let radio = document.querySelectorAll("[type=radio]");
    let radioParent = document.getElementById("form");

    const showMessage = (el, text, classText, idText) => {
        let parent = el.parentNode;

        if (parent.lastChild.nodeName.toLowerCase() != "span") {
            let span = document.createElement("span");
            span.setAttribute("class", classText);
            span.setAttribute("id", idText)
            let message = document.createTextNode(text);
            span.appendChild(message);
            parent.appendChild(span);
        }
    }
    const removeMessage = (el) => {
        let span = document.querySelector("#" + el.id + "s");
        if (span)
            span.remove();
    }
    const checkEmptyText = (el) => {
        if (el.value == "") {
            showMessage(el, el.parentElement.firstElementChild.innerHTML + " ausfüllen!", "message", el.id + "s");
            return true;
        } else {
            removeMessage(el);
            return false;
        }
    }


    const checkNoMood = (el) => {
        for (let i = 0; i < el.length; i++) {
            if (el[i].checked) {
                console.log(el[i].value);
                removeMessage(radioParent);
                return true;
            } else
                showMessage(radioParent, "Hast Du keine Laune?", "message", radioParent.id + "s");

        }
    }

    let validate = () => {
        let error = null;
        if (checkEmptyText(ln))
            error++;
        if (checkEmptyText(fn))
            error++;
        if (checkEmptyText(age))
            error++;
        if (checkEmptyText(mail))
            error++;
        if (!checkNoMood(radio))
            error++;
        if (error == null)
            return true;
    }

    const init = () => {
        ln.addEventListener("blur", function (e) {
            checkEmptyText(this);
        }, false);
        fn.addEventListener("blur", function (e) {
            checkEmptyText(this);
        }, false);
        age.addEventListener("blur", function (e) {
            checkEmptyText(this);
        }, false);
        mail.addEventListener("blur", function (e) {
            checkEmptyText(this);
        }, false);

        submit.addEventListener("click", function (e) {
            e.preventDefault();
            if (validate())
            // woher kommt form?
                showMessage(form, "Danke", "danke");

                let $form = document.querySelector('form')
                const formData = new FormData($form)
                const entries = formData.entries()

                for (const pair of entries) {
                    console.log(`key: ${pair[0]}, value: ${pair[1]}`)
                }
        }, false);
    }

    init();

}
