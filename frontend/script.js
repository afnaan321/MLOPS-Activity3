async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const users = await response.json();

        const userList = document.getElementById("users-list");
        userList.innerHTML = "";

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

async function addUser() {
    const username = document.getElementById("username").value;

    if (!username) {
        alert("Enter a name first!");
        return;
    }

    try {
        await fetch("http://localhost:5000/add_user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username })
        });

        fetchUsers();
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

fetchUsers();
