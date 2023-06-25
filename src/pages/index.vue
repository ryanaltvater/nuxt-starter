<script setup>
    useHead({
        title: 'Home',
        meta: [
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: '' },
            { property: 'og:description', content: '' },
            { property: 'og:url', content: '' },
        ],
        bodyAttrs: { class: '' },
    });
</script>

<template>
    <Header />

    <section>
        <div class="container">
            <div class="grid gap-3 md:grid-cols-4">
                <div class="sm-max:col-span-4 md:col-span-1">
                    <h3 class="text-red-600">Headings</h3>

                    <h1>Heading 1</h1>

                    <h2>Heading 2</h2>

                    <h3>Heading 3</h3>

                    <h4>Heading 4</h4>

                    <h5>Heading 5</h5>

                    <h6 class="mb-0">Heading 6</h6>
                </div>

                <div class="sm-max:col-span-4 md:col-span-3">
                    <h3 class="text-red-600">Paragraph</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="#">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <a href="#">laborum</a>.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <a href="#">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div class="col-span-4">
                    <h3 class="text-red-600">Lists</h3>

                    <div class="grid gap-3 md:grid-cols-4">
                        <ul class="col-span-2 mb-0">
                            <li>Lorem ipsum dolor sit amet, consectetur</li>

                            <li>Excepteur sint occaecat cupidatat esse cillum</li>

                            <li>Deserunt mollit anim id est laborum minim veniam</li>
                        </ul>

                        <ol class="col-span-2">
                            <li>Sed do eiusmod tempor incididunt dolore</li>

                            <li>Duis aute irure dolor in reprehenderit non proident</li>

                            <li>Excepteur sint occaecat cupidatat occaecat</li>
                        </ol>
                    </div>
                </div>

                <div class="md-max:col-span-4 lg:col-span-2">
                    <h3 class="text-red-600">Forms</h3>

                    <form>
                        <div>
                            <input class="p-1" type="text" placeholder="First name" />
                        </div>

                        <div>
                            <input class="p-1" type="text" placeholder="Last name" />
                        </div>

                        <div>
                            <select class="p-1 pr-4">
                                <option value="">Select an option</option>
                            </select>
                        </div>

                        <div>
                            <textarea class="p-1" name="" placeholder="Leave a comment"></textarea>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="col-span-1">
                                <div class="flex items-center">
                                    <input id="checkbox1" type="checkbox" name="checkboxes" />

                                    <label for="checkbox1">Option 1</label>
                                </div>

                                <div class="flex items-center">
                                    <input id="checkbox2" type="checkbox" name="checkboxes" />

                                    <label for="checkbox2">Option 2</label>
                                </div>

                                <div class="flex items-center">
                                    <input id="checkbox3" type="checkbox" name="checkboxes" />

                                    <label for="checkbox3">Option 3</label>
                                </div>
                            </div>

                            <div class="col-span-1">
                                <div class="flex items-center">
                                    <input id="radio1" type="radio" name="radios" />

                                    <label for="radio1">Option 1</label>
                                </div>

                                <div class="flex items-center">
                                    <input id="radio2" type="radio" name="radios" />

                                    <label for="radio2">Option 2</label>
                                </div>

                                <div class="flex items-center">
                                    <input id="radio3" type="radio" name="radios" />

                                    <label for="radio3">Option 3</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="md-max:col-span-4 lg:col-span-2">
                    <h3 class="text-red-600">Buttons</h3>

                    <div class="btn-group">
                        <a class="btn btn-primary" href="#">Primary</a>

                        <a class="btn btn-secondary" href="#">Secondary</a>

                        <a class="btn btn-tertiary" href="#">Tertiary</a>
                    </div>

                    <div class="btn-group mt-3">
                        <a class="btn btn-primary-outline" href="#">Primary</a>

                        <a class="btn btn-secondary-outline" href="#">Secondary</a>

                        <a class="btn btn-tertiary-outline" href="#">Tertiary</a>
                    </div>

                    <div class="btn-group mt-3 xs-max:text-center">
                        <a class="btn btn-link-reverse" href="#">Prev</a>

                        <a class="btn btn-link ml-2 border-l border-black pl-2" href="#">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer />
</template>
