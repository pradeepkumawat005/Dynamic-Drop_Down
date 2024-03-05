const menuData = [
    {
        spans: "DashBoard",
        submenu: [
            {
                spans: "Users",
                submenu: [
                    { spans: "Providers" }, 
                    { 
                        spans: "Admins", 
                        submenu: [
                            { 
                                spans: "Add Admin", 
                                submenu: [
                                { 
                                    spans: "My admin" 
                                }, 
                                { 
                                    spans: "Pro Admin", 
                                    submenu: [
                                        { spans: "New Admin" },
                                        { spans: "Clear Admin" }
                                    ] 
                                }
                                ] 
                            },
                            { spans: "Remove Admin" }
                        ] 
                    }
                ]
            },
            { 
                spans: "Add Users" 
            }
        ]
    },
    {
        spans: "Products",
        submenu: [
            { spans: "Add products", submenu: [{ spans: "Product 2" }, { spans: "Product 1" }] },
            { spans: "All Products" }
        ]
    }
];

const menuList = document.getElementById("menuList");

function createMenu(data, parent) {
    data.forEach(item => {
        const li = document.createElement("li");
        li.style.padding = "10px";
        li.style.listStyle = "none";
        const spans = document.createElement("span");
        spans.textContent = item.spans;

        li.appendChild(spans);
        if (item.submenu) {
            const plusButton = document.createElement("button");
            plusButton.className = "setnkow";
            plusButton.style.marginLeft = "10px";
            plusButton.textContent = "+";
            spans.appendChild(plusButton);

            const submenu = document.createElement("ul");
            submenu.style.borderLeft = "2px solid black";
            submenu.style.listStyle = "none";
            submenu.style.padding = "10px";
            submenu.classList.add("submenu");
            createMenu(item.submenu, submenu);
            li.appendChild(submenu);

            plusButton.addEventListener("click", () => {
                if (submenu.style.display === "none" || submenu.style.display === "") {
                    submenu.style.display = "block";
                    plusButton.textContent = "-";
                } else {
                    submenu.style.display = "none";
                    plusButton.textContent = "+";
                }
            });
        }

        parent.appendChild(li);
    });
}
createMenu(menuData, menuList);
