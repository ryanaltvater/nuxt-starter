<template>
    <div class="container">
        <h3 class="text-red-500">Fat Footer</h3>
    </div>

    <footer>
        <div class="py-4 bg-gray-100">
            <div class="container">
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                        <h4 class="font-bold">Primary links</h4>

                        <ul class="list-none">
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li class="mt-1">
                                <a href="/about-us">About us</a>
                            </li>

                            <li class="mt-1">
                                <a href="/faqs">FAQs</a>
                            </li>

                            <li class="mt-1">
                                <a href="/contact-us">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold">Secondary links</h4>

                        <ul class="list-none">
                            <li>
                                <a href="#">My account</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">Store</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">Blog</a>
                            </li>

                            <li class="mt-1">
                                <a href="/about-us/careers">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold">Social links</h4>

                        <ul class="list-none">
                            <li>
                                <a href="#">Facebook</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">Twitter</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">Instagram</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">YouTube</a>
                            </li>

                            <li class="mt-1">
                                <a href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold">About the company</h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container pt-4 md:flex md:justify-between">
            <div class="md-max:text-center">
                <p class="sm-max:mb-1">&copy; 2022 Company. All rights reserved.</p>
            </div>

            <nav>
                <ul class="mb-0 pl-0 flex md-max:justify-center list-none">
                    <li class="mb-0">
                        <a href="/terms-and-conditions">Terms & conditions</a>
                    </li>

                    <li class="mb-0 ml-2 pl-2 border-l border-black">
                        <a href="/privacy-policy">Privacy policy</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>