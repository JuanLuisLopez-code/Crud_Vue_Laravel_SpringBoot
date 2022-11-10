<template>
    <main>
        <h1>Header UP</h1>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/create">Create</RouterLink>
            </li>
            <li>
                <button @click="Laravel()">Laravel</button>
            </li>
            <li>
                <button @click="SpringBoot()">SpringBoot</button>
            </li>
        </ul>
    </main>
</template>

<script setup>

const Laravel = () => {
    sessionStorage.setItem("type", "Laravel")
    window.location.reload()
}

const SpringBoot = () => {
    sessionStorage.setItem("type", "SpringBoot")
    window.location.reload()
}
</script>