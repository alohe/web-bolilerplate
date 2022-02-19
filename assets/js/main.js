let packages = document.querySelector('#packages')


let list = [
  {
    class: "",
    name: "Hourly",
    price: "20",
    desc:
      "Hourly rate for a lengthy project where we can implement your ideas as we go",
    text: "Hi, I wanted to hire you for a hourly rate project",
  },
  {
    class: "most",
    name: "Fixed fee per page",
    price: "350",
    desc:
      `Fixed Fee / per page per integration. No contract.`,
    text: "Hi, i wanted your $350 / Per Page service package",
  },
  {
    class: "",
    name: "Fixed Price",
    price: "700",
    desc:
      "One time payment only if the project takes less than a month, if it exceeds a month you'll be charged $20 / hour",
    text: "Hi, I wanted your Fixed Price service package",
  },
];


list.forEach(each => {
    packages.innerHTML += `
        <div class="col-lg-4">
            <div class="package ${each.class}">
                <h1 class="name t-pri">${each.name}</h1>
                <div class="row m-0">
                    <h1 class="price mt-0">
                        <font class="dollar">$</font>
                    </h1>
                    <h1 class="price mt-1">
                        ${each.price}
                    </h1>
                </div>
                <a href="https://wa.me/251982264783?text=${each.text}" target="_blank">
                    <button>Get Started</button>
                </a>
                <p class="desc">${each.desc}</p>
            </div>
        </div>
    `;
});
