<script setup>
    useHead({
        title: 'About us',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:type', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:image', content: '' },
            { property: 'og:url', content: '' }
        ],
        bodyAttrs: { class: '' }
    })
</script>

<template>
    <Header />

    <section>
        <div class="container">
            <h1>About us</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>
                <a href="/about-us/careers">Careers</a>
            </p>
        </div>
    </section>

    <Footer />
</template>;
