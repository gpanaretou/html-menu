function toggleMenuOptions() {
    let homeButton = document.getElementById('navbar-menu-dropdown');

    homeButton.classList.toggle('hidden')
}

function renderNavbarTemplate() {
    const template = document.createElement('template')
    const navbar = document.getElementById('navbar')

    template.innerHTML = `
        <nav class="fixed w-full content-center z-10">
            <div class="relative top-0 w-full">
                <div class="w-full flex flex-row p-6 justify-between items-center bg-green-light">
                    <div id="logo">
                        <a href="./index.html" title="Home" alt="Home Button">
                            <svg class="w-24 md:w-36 h-16 fill-forest-purple text-forest-purple" viewBox="0 0 265 46" xmlns="http://www.w3.org/2000/svg"><g id="fontsvg1723206530616" stroke-linecap="round" fill-rule="evenodd">
                                <path d="M 16.473 29.582 L 16.373 29.732 A 16.952 16.952 0 0 1 16.467 29.639 Q 16.924 29.189 16.794 29.399 A 1.138 1.138 0 0 1 16.773 29.432 A 147.433 147.433 0 0 0 16.079 30.429 Q 15.038 31.939 14.597 32.68 A 6.539 6.539 0 0 0 14.373 33.082 Q 13.973 33.882 13.523 34.857 Q 13.136 35.695 12.638 36.755 A 472.813 472.813 0 0 1 12.473 37.107 A 31.469 31.469 0 0 0 12.058 38.025 Q 11.741 38.757 11.523 39.382 Q 11.173 40.382 10.673 41.332 Q 8.559 44.996 3.444 44.556 A 14.652 14.652 0 0 1 2.773 44.482 A 7.808 7.808 0 0 1 1.79 44.298 Q 1.201 44.146 0.723 43.907 Q -0.096 43.498 0.013 42.695 A 1.575 1.575 0 0 1 0.023 42.632 Q 0.391 40.79 1.65 36.701 A 207.156 207.156 0 0 1 1.873 35.982 Q 4.723 26.782 5.273 24.132 Q 5.623 23.232 5.898 22.282 Q 6.134 21.466 6.389 20.834 A 10.145 10.145 0 0 1 6.473 20.632 A 3.762 3.762 0 0 1 6.69 20.139 Q 7.266 19.066 8.223 19.482 A 1.724 1.724 0 0 1 8.755 18.414 Q 9.023 18.15 9.423 17.932 Q 10.523 17.332 11.873 17.332 Q 13.223 17.332 14.498 17.957 A 3.202 3.202 0 0 1 16.097 19.721 A 4.392 4.392 0 0 1 16.223 20.082 Q 20.473 16.382 23.973 17.232 A 3.164 3.164 0 0 1 25.546 18.085 A 4.37 4.37 0 0 1 26.023 18.632 A 13.271 13.271 0 0 1 29.043 16.426 A 11.405 11.405 0 0 1 31.673 15.432 A 14.208 14.208 0 0 1 32.219 15.422 Q 35.694 15.422 37.273 17.232 A 7.893 7.893 0 0 1 37.64 17.626 A 9.161 9.161 0 0 1 37.773 17.782 Q 38.341 18.392 38.514 18.671 A 0.749 0.749 0 0 1 38.573 18.782 Q 39.408 20.081 39.124 24.523 A 46.966 46.966 0 0 1 39.073 25.232 Q 38.523 31.782 36.573 38.382 Q 35.535 41.693 34.693 41.829 A 0.463 0.463 0 0 1 34.673 41.832 A 2.569 2.569 0 0 1 34.338 41.877 Q 34.034 41.897 33.761 41.835 A 1.802 1.802 0 0 1 33.748 41.832 Q 33.323 41.732 32.998 41.707 Q 32.673 41.682 32.623 42.282 A 3.203 3.203 0 0 1 30.765 43.452 A 5.118 5.118 0 0 1 29.573 43.582 A 5.311 5.311 0 0 1 27.696 43.26 A 4.801 4.801 0 0 1 26.173 42.332 A 3.923 3.923 0 0 1 25.509 41.632 Q 24.745 40.576 25.098 39.257 A 77.956 77.956 0 0 1 26.025 36.074 A 86.398 86.398 0 0 1 26.173 35.607 A 147.564 147.564 0 0 1 27.129 32.724 A 164.677 164.677 0 0 1 27.473 31.732 Q 28.673 28.232 30.123 24.432 A 9.609 9.609 0 0 0 29.551 25.165 Q 28.643 26.435 27.331 28.849 A 79.953 79.953 0 0 0 27.273 28.957 A 262.462 262.462 0 0 1 26.645 30.11 Q 25.488 32.222 25.086 32.837 A 4.256 4.256 0 0 1 25.023 32.932 A 110.231 110.231 0 0 1 24.616 33.737 Q 24.217 34.52 23.897 35.11 A 33.36 33.36 0 0 1 23.623 35.607 Q 23.073 36.582 22.148 37.157 Q 21.439 37.597 20.819 37.789 A 3.56 3.56 0 0 1 20.448 37.882 A 4.872 4.872 0 0 1 19.738 37.968 Q 19.344 37.985 18.973 37.932 A 4.301 4.301 0 0 1 17.992 37.671 A 2.777 2.777 0 0 1 16.623 36.532 L 16.323 35.732 A 3.168 3.168 0 0 1 16.234 35.453 Q 16.141 35.114 16.073 34.632 A 6.768 6.768 0 0 1 16.047 34.23 Q 15.998 32.897 16.339 30.475 A 57.467 57.467 0 0 1 16.473 29.582 Z M 242.023 29.582 L 241.923 29.732 A 16.952 16.952 0 0 1 242.017 29.639 Q 242.474 29.189 242.344 29.399 A 1.138 1.138 0 0 1 242.323 29.432 A 147.433 147.433 0 0 0 241.629 30.429 Q 240.588 31.939 240.147 32.68 A 6.539 6.539 0 0 0 239.923 33.082 Q 239.523 33.882 239.073 34.857 Q 238.686 35.695 238.188 36.755 A 472.813 472.813 0 0 1 238.023 37.107 A 31.469 31.469 0 0 0 237.608 38.025 Q 237.291 38.757 237.073 39.382 Q 236.723 40.382 236.223 41.332 Q 234.109 44.996 228.994 44.556 A 14.652 14.652 0 0 1 228.323 44.482 A 7.808 7.808 0 0 1 227.34 44.298 Q 226.751 44.146 226.273 43.907 Q 225.454 43.498 225.563 42.695 A 1.575 1.575 0 0 1 225.573 42.632 Q 225.941 40.79 227.2 36.701 A 207.156 207.156 0 0 1 227.423 35.982 Q 230.273 26.782 230.823 24.132 Q 231.173 23.232 231.448 22.282 Q 231.684 21.466 231.939 20.834 A 10.145 10.145 0 0 1 232.023 20.632 A 3.762 3.762 0 0 1 232.24 20.139 Q 232.816 19.066 233.773 19.482 A 1.724 1.724 0 0 1 234.305 18.414 Q 234.573 18.15 234.973 17.932 Q 236.073 17.332 237.423 17.332 Q 238.773 17.332 240.048 17.957 A 3.202 3.202 0 0 1 241.647 19.721 A 4.392 4.392 0 0 1 241.773 20.082 Q 246.023 16.382 249.523 17.232 A 3.164 3.164 0 0 1 251.096 18.085 A 4.37 4.37 0 0 1 251.573 18.632 A 13.271 13.271 0 0 1 254.593 16.426 A 11.405 11.405 0 0 1 257.223 15.432 A 14.208 14.208 0 0 1 257.769 15.422 Q 261.244 15.422 262.823 17.232 A 7.893 7.893 0 0 1 263.19 17.626 A 9.161 9.161 0 0 1 263.323 17.782 Q 263.891 18.392 264.064 18.671 A 0.749 0.749 0 0 1 264.123 18.782 Q 264.958 20.081 264.674 24.523 A 46.966 46.966 0 0 1 264.623 25.232 Q 264.073 31.782 262.123 38.382 Q 261.085 41.693 260.243 41.829 A 0.463 0.463 0 0 1 260.223 41.832 A 2.569 2.569 0 0 1 259.888 41.877 Q 259.584 41.897 259.311 41.835 A 1.802 1.802 0 0 1 259.298 41.832 Q 258.873 41.732 258.548 41.707 Q 258.223 41.682 258.173 42.282 A 3.203 3.203 0 0 1 256.315 43.452 A 5.118 5.118 0 0 1 255.123 43.582 A 5.311 5.311 0 0 1 253.246 43.26 A 4.801 4.801 0 0 1 251.723 42.332 A 3.923 3.923 0 0 1 251.059 41.632 Q 250.295 40.576 250.648 39.257 A 77.956 77.956 0 0 1 251.575 36.074 A 86.398 86.398 0 0 1 251.723 35.607 A 147.564 147.564 0 0 1 252.679 32.724 A 164.677 164.677 0 0 1 253.023 31.732 Q 254.223 28.232 255.673 24.432 A 9.609 9.609 0 0 0 255.101 25.165 Q 254.193 26.435 252.881 28.849 A 79.953 79.953 0 0 0 252.823 28.957 A 262.462 262.462 0 0 1 252.195 30.11 Q 251.038 32.222 250.636 32.837 A 4.256 4.256 0 0 1 250.573 32.932 A 110.231 110.231 0 0 1 250.166 33.737 Q 249.767 34.52 249.447 35.11 A 33.36 33.36 0 0 1 249.173 35.607 Q 248.623 36.582 247.698 37.157 Q 246.989 37.597 246.369 37.789 A 3.56 3.56 0 0 1 245.998 37.882 A 4.872 4.872 0 0 1 245.288 37.968 Q 244.894 37.985 244.523 37.932 A 4.301 4.301 0 0 1 243.542 37.671 A 2.777 2.777 0 0 1 242.173 36.532 L 241.873 35.732 A 3.168 3.168 0 0 1 241.784 35.453 Q 241.691 35.114 241.623 34.632 A 6.768 6.768 0 0 1 241.597 34.23 Q 241.548 32.897 241.889 30.475 A 57.467 57.467 0 0 1 242.023 29.582 Z M 172.523 3.832 L 172.573 3.632 L 173.023 3.182 A 6.212 6.212 0 0 1 173.295 2.614 Q 173.598 2.063 173.928 1.804 A 1.144 1.144 0 0 1 174.223 1.632 Q 174.573 1.532 175.123 1.382 A 2.681 2.681 0 0 0 175.48 1.254 Q 175.837 1.099 176.299 0.809 A 11.514 11.514 0 0 0 176.573 0.632 A 1.075 1.075 0 0 1 177.285 0.065 Q 177.598 -0.022 178.023 0.007 A 4.733 4.733 0 0 1 179.625 0.414 A 5.862 5.862 0 0 1 180.198 0.707 Q 181.273 1.332 181.948 2.432 A 3.091 3.091 0 0 1 182.291 3.2 Q 182.493 3.907 182.291 4.645 A 3.092 3.092 0 0 1 182.273 4.707 Q 181.923 5.882 181.698 6.457 Q 181.473 7.032 181.248 7.532 Q 181.054 7.962 180.787 8.484 A 30.48 30.48 0 0 1 180.698 8.657 A 30.7 30.7 0 0 0 180.524 8.996 Q 180.248 9.545 179.873 10.332 L 178.223 13.782 A 6.063 6.063 0 0 1 178.131 14.007 Q 177.94 14.451 177.798 14.532 A 0.691 0.691 0 0 0 177.654 14.643 Q 177.559 14.738 177.473 14.882 Q 177.9 14.787 178.192 14.737 A 7.795 7.795 0 0 1 178.223 14.732 L 178.823 14.632 Q 179.424 14.546 180.173 14.46 A 70.894 70.894 0 0 1 180.423 14.432 A 7.362 7.362 0 0 0 180.814 14.493 Q 181.007 14.518 181.177 14.527 A 3.644 3.644 0 0 0 181.373 14.532 L 182.073 14.532 A 2.814 2.814 0 0 1 182.558 14.578 Q 182.802 14.621 183.076 14.704 A 6.583 6.583 0 0 1 183.523 14.857 Q 184.373 15.182 184.623 15.982 A 2.99 2.99 0 0 1 184.762 16.879 A 3.083 3.083 0 0 1 184.673 17.607 A 3.574 3.574 0 0 1 184.033 18.933 A 4.257 4.257 0 0 1 183.873 19.132 A 2.093 2.093 0 0 1 182.385 19.878 A 2.668 2.668 0 0 1 182.323 19.882 Q 178.045 21.062 176.185 21.179 A 7.377 7.377 0 0 1 176.123 21.182 L 175.823 21.532 L 175.823 21.582 Q 175.479 22.407 175.1 23.527 A 53.87 53.87 0 0 0 174.748 24.607 Q 174.173 26.432 173.498 28.557 A 502.577 502.577 0 0 0 172.297 32.391 A 554.182 554.182 0 0 0 172.123 32.957 A 104.871 104.871 0 0 1 170.859 36.805 A 95.045 95.045 0 0 1 170.673 37.332 A 101.265 101.265 0 0 1 169.827 39.726 Q 168.233 44.047 167.348 44.853 A 0.921 0.921 0 0 1 167.173 44.982 Q 166.773 45.182 166.348 45.257 A 7.113 7.113 0 0 0 166.201 45.285 Q 165.936 45.337 165.881 45.376 A 0.059 0.059 0 0 0 165.873 45.382 A 9.591 9.591 0 0 1 164.644 45.237 Q 163.997 45.115 163.457 44.902 A 5.026 5.026 0 0 1 162.973 44.682 A 8.878 8.878 0 0 1 162.4 44.358 Q 161.713 43.932 161.423 43.532 Q 161.064 43.04 161.187 42.426 A 1.855 1.855 0 0 1 161.223 42.282 Q 162.173 33.582 165.023 23.232 Q 164.023 23.232 163.623 23.432 A 3.65 3.65 0 0 1 162.713 23.765 Q 162.298 23.86 161.823 23.882 L 161.773 23.882 A 1.963 1.963 0 0 1 160.722 23.491 A 2.8 2.8 0 0 1 160.323 23.132 Q 159.673 22.432 159.523 21.532 Q 159.41 20.854 159.637 20.147 A 3.835 3.835 0 0 1 159.823 19.682 Q 160.202 18.881 161.223 18.364 A 5.366 5.366 0 0 1 161.623 18.182 Q 163.223 17.732 163.973 17.432 A 28.582 28.582 0 0 1 164.913 17.061 Q 165.758 16.746 166.398 16.582 A 37.764 37.764 0 0 0 166.733 16.495 Q 167.305 16.342 167.459 16.276 A 0.334 0.334 0 0 0 167.498 16.257 A 2.016 2.016 0 0 0 167.555 16.221 Q 167.613 16.184 167.648 16.154 A 0.382 0.382 0 0 0 167.673 16.132 Q 167.823 16.032 168.423 16.032 Q 168.723 14.582 169.023 13.082 A 36.885 36.885 0 0 1 169.769 10.044 A 36.235 36.235 0 0 1 169.773 10.032 Q 170.773 6.432 172.523 3.832 Z M 77.223 43.332 L 77.223 43.032 A 26.117 26.117 0 0 0 76.99 42.964 Q 76.7 42.88 76.535 42.841 A 3.238 3.238 0 0 0 76.498 42.832 Q 76.273 42.782 76.173 42.632 Q 76.025 42.386 75.925 41.117 A 25.636 25.636 0 0 1 75.923 41.082 Q 75.07 42.404 74.253 42.853 A 2.062 2.062 0 0 1 73.973 42.982 Q 73.023 43.332 72.023 43.332 Q 67.173 43.332 65.123 41.582 A 4.376 4.376 0 0 1 63.792 39.591 Q 63.373 38.371 63.423 36.682 A 13.531 13.531 0 0 1 63.97 33.316 Q 64.402 31.806 65.174 30.178 A 28.707 28.707 0 0 1 66.223 28.182 A 21.682 21.682 0 0 1 68.866 24.506 Q 71.028 22.111 73.694 20.864 A 13.822 13.822 0 0 1 73.873 20.782 A 5.109 5.109 0 0 1 76.796 19.889 Q 77.437 19.889 78.123 20.032 A 6.448 6.448 0 0 1 79.132 20.345 Q 79.646 20.556 80.007 20.84 A 2.122 2.122 0 0 1 80.823 22.132 A 10.494 10.494 0 0 0 81.393 20.366 A 9.675 9.675 0 0 0 81.423 20.232 Q 83.509 10.822 85.981 5.538 A 30.155 30.155 0 0 1 86.373 4.732 Q 87.223 3.082 88.123 2.432 A 5.648 5.648 0 0 1 89.565 1.763 Q 91.258 1.264 93.073 2.032 A 4.637 4.637 0 0 1 93.984 2.544 A 3.643 3.643 0 0 1 94.723 3.257 Q 95.323 4.032 95.198 4.682 A 2.605 2.605 0 0 0 95.164 4.906 Q 95.135 5.191 95.183 5.42 A 1.085 1.085 0 0 0 95.298 5.732 A 7.074 7.074 0 0 0 95.677 6.332 A 8.058 8.058 0 0 0 95.823 6.532 Q 96.623 7.482 96.473 8.182 A 63.226 63.226 0 0 1 94.779 13.743 A 74.545 74.545 0 0 1 93.798 16.357 Q 92.123 20.582 90.373 24.782 Q 88.623 28.982 87.198 33.057 A 41.609 41.609 0 0 0 85.917 37.447 A 32.694 32.694 0 0 0 85.323 40.782 A 2.2 2.2 0 0 1 84.873 42.109 A 3.144 3.144 0 0 1 84.523 42.507 Q 83.723 43.282 82.523 43.732 Q 81.335 44.149 80.217 44.149 A 5.95 5.95 0 0 1 77.223 43.332 Z M 148.312 44.428 A 12.942 12.942 0 0 0 151.723 42.432 Q 152.004 42.207 152.333 41.951 A 95.11 95.11 0 0 1 152.873 41.532 A 18.311 18.311 0 0 0 153.021 41.418 Q 155.393 39.567 155.393 38.27 A 1.352 1.352 0 0 0 155.373 38.032 Q 155.973 36.251 155.973 34.607 A 8.515 8.515 0 0 0 154.773 30.232 A 11.27 11.27 0 0 0 153.414 28.412 Q 152.637 27.551 151.599 26.679 A 28.489 28.489 0 0 0 149.423 25.032 A 2.45 2.45 0 0 0 149.537 24.98 Q 149.7 24.9 149.75 24.836 A 0.089 0.089 0 0 0 149.773 24.782 A 0.121 0.121 0 0 1 149.767 24.747 Q 149.767 24.337 152.619 23.861 A 53.51 53.51 0 0 1 153.773 23.682 A 9.271 9.271 0 0 0 154.816 23.351 Q 155.563 23.06 156.105 22.671 A 3.208 3.208 0 0 0 157.473 20.582 Q 157.557 20.021 157.46 19.444 A 4.35 4.35 0 0 0 157.198 18.532 A 5.837 5.837 0 0 0 156.951 17.999 A 4.765 4.765 0 0 0 156.048 16.782 Q 155.323 16.082 153.648 15.982 Q 152.653 15.923 151.518 16.013 A 21.533 21.533 0 0 0 149.898 16.207 Q 147.823 16.532 145.723 17.232 A 24.203 24.203 0 0 0 145.326 17.368 Q 144.146 17.785 143.331 18.218 A 6.852 6.852 0 0 0 142.573 18.682 Q 141.523 19.432 140.823 20.082 A 14.466 14.466 0 0 0 140.429 20.459 Q 138.285 22.59 138.423 24.382 Q 138.123 25.132 138.123 26.032 Q 138.123 26.932 138.373 27.782 A 8.757 8.757 0 0 0 138.491 28.192 Q 138.782 29.112 139.198 29.642 A 1.969 1.969 0 0 0 139.823 30.182 A 3.156 3.156 0 0 0 139.948 30.368 Q 140.744 31.46 142.773 32.382 Q 143.673 32.782 144.548 33.182 A 6.572 6.572 0 0 1 145.213 33.532 A 5.076 5.076 0 0 1 146.023 34.132 A 1.07 1.07 0 0 1 145.483 34.81 Q 143.915 35.796 137.906 35.705 A 78.371 78.371 0 0 1 136.873 35.682 Q 136.323 35.682 136.073 36.107 Q 135.823 36.532 135.623 37.007 A 4.699 4.699 0 0 1 135.515 37.246 A 3.997 3.997 0 0 1 135.148 37.857 A 0.772 0.772 0 0 1 134.707 38.153 Q 134.558 38.192 134.376 38.188 A 1.69 1.69 0 0 1 134.273 38.182 Q 133.373 37.982 132.748 38.382 Q 132.123 38.782 131.873 39.482 A 2.857 2.857 0 0 0 131.754 40.292 Q 131.754 41.182 132.33 42.073 A 5.735 5.735 0 0 0 132.973 42.882 A 6.939 6.939 0 0 0 134.838 44.333 A 9.527 9.527 0 0 0 136.673 45.082 A 15.025 15.025 0 0 0 137.93 45.398 Q 139.731 45.769 141.723 45.732 Q 144.423 45.682 147.098 44.857 A 15.529 15.529 0 0 0 148.312 44.428 Z M 55.847 34.337 A 12.292 12.292 0 0 0 57.073 33.832 A 17.874 17.874 0 0 0 58.158 33.233 Q 59.01 32.722 59.685 32.171 A 8.633 8.633 0 0 0 61.023 30.832 A 5.999 5.999 0 0 0 61.455 30.176 Q 62.46 28.427 63.123 25.032 A 20.269 20.269 0 0 0 63.133 24.957 Q 63.44 22.749 63.151 21.236 A 5.342 5.342 0 0 0 62.823 20.132 Q 61.791 17.864 59.626 17.107 A 7.22 7.22 0 0 0 57.423 16.732 A 17.151 17.151 0 0 0 56.953 16.726 A 16.273 16.273 0 0 0 50.423 18.082 Q 47.523 19.332 45.173 22.132 A 38.027 38.027 0 0 0 44.244 23.275 Q 42.247 25.838 41.223 28.132 A 26.646 26.646 0 0 0 40.726 29.285 Q 38.599 34.57 39.773 38.632 A 8.362 8.362 0 0 0 39.848 38.875 Q 40.438 40.677 41.736 41.816 A 7.087 7.087 0 0 0 44.173 43.182 Q 46.192 44.085 49.8 43.953 A 29.794 29.794 0 0 0 51.023 43.882 Q 53.023 43.732 55.023 43.332 Q 57.023 42.932 58.523 42.282 A 8.814 8.814 0 0 0 59.129 41.993 Q 59.604 41.742 59.981 41.46 A 4.239 4.239 0 0 0 60.748 40.732 A 2.263 2.263 0 0 0 60.992 40.363 Q 61.276 39.82 61.143 39.242 A 2.013 2.013 0 0 0 60.998 38.832 A 12.13 12.13 0 0 0 60.831 38.493 Q 60.477 37.805 60.273 37.682 A 1.436 1.436 0 0 0 60.162 37.622 Q 59.977 37.532 59.823 37.532 A 0.606 0.606 0 0 1 59.7 37.519 Q 59.621 37.503 59.535 37.466 A 1.34 1.34 0 0 1 59.373 37.382 Q 59.169 37.26 58.867 36.643 A 9.274 9.274 0 0 1 58.723 36.332 A 3.858 3.858 0 0 0 58.112 35.878 Q 57.44 35.48 56.716 35.48 A 2.659 2.659 0 0 0 56.598 35.482 A 8.079 8.079 0 0 0 55.961 35.536 A 9.193 9.193 0 0 0 54.298 35.907 A 38.519 38.519 0 0 0 54.005 36.002 A 34.943 34.943 0 0 0 52.048 36.707 A 4.848 4.848 0 0 1 51.347 36.927 Q 50.936 37.021 50.554 37.021 A 2.924 2.924 0 0 1 50.073 36.982 A 11.193 11.193 0 0 1 49.855 36.866 Q 49.032 36.416 48.73 36.053 A 0.79 0.79 0 0 1 48.573 35.782 A 14.333 14.333 0 0 0 49.368 35.7 Q 50.748 35.522 53.123 35.032 A 46.671 46.671 0 0 0 53.454 34.962 Q 54.449 34.747 55.223 34.532 A 10.306 10.306 0 0 0 55.847 34.337 Z M 129.773 19.782 L 129.973 19.832 A 0.3 0.3 0 0 1 130.006 19.834 Q 130.039 19.838 130.056 19.85 A 0.038 0.038 0 0 1 130.073 19.882 A 2.257 2.257 0 0 1 130.435 19.775 Q 131.456 19.569 132.17 20.557 A 3.25 3.25 0 0 1 132.223 20.632 A 3.913 3.913 0 0 1 132.542 21.251 Q 132.821 21.92 133.012 22.902 A 14.757 14.757 0 0 1 133.073 23.232 A 16.749 16.749 0 0 1 133.086 23.768 Q 133.108 26.088 132.573 29.882 A 991.888 991.888 0 0 0 132.178 32.863 Q 131.507 38.002 131.357 39.694 A 16.038 16.038 0 0 0 131.323 40.132 A 2.576 2.576 0 0 1 131.327 40.279 Q 131.327 41.91 129.173 42.532 Q 127.227 43.131 125.281 42.485 A 7.063 7.063 0 0 1 125.273 42.482 A 4.834 4.834 0 0 1 124.59 42.194 Q 123.346 41.542 123.55 40.437 A 1.969 1.969 0 0 1 123.573 40.332 A 5.84 5.84 0 0 1 123.323 40.76 Q 123.057 41.17 122.791 41.392 A 1.639 1.639 0 0 1 122.773 41.407 A 2.992 2.992 0 0 1 122.524 41.585 Q 122.099 41.863 121.277 42.268 A 28.562 28.562 0 0 1 121.198 42.307 A 7.51 7.51 0 0 1 120.322 42.663 Q 119.384 42.983 118.063 43.223 A 25.401 25.401 0 0 1 117.873 43.257 Q 115.723 43.632 113.573 43.457 A 11.228 11.228 0 0 1 110.794 42.886 A 10 10 0 0 1 109.648 42.407 A 4.616 4.616 0 0 1 108.023 41.114 A 4.606 4.606 0 0 1 107.273 39.682 Q 106.123 36.082 107.573 30.532 Q 108.573 26.882 111.173 24.082 Q 114.173 20.882 117.973 18.782 A 17.845 17.845 0 0 1 120.601 17.604 A 13.189 13.189 0 0 1 123.473 16.932 Q 124.373 16.832 125.048 16.982 Q 125.723 17.132 126.498 17.282 Q 127.273 17.432 127.973 17.732 A 4.866 4.866 0 0 1 128.717 18.114 Q 129.097 18.356 129.34 18.639 A 1.709 1.709 0 0 1 129.773 19.782 Z M 189.271 19.394 A 2.635 2.635 0 0 0 187.773 19.882 A 6.777 6.777 0 0 0 187.57 20.026 Q 185.339 21.667 183.498 25.757 A 26.854 26.854 0 0 0 182.643 27.89 A 22.291 22.291 0 0 0 181.373 34.232 A 20.165 20.165 0 0 0 181.356 34.533 Q 181.23 37.144 181.839 38.974 A 6.216 6.216 0 0 0 183.123 41.232 Q 184.873 43.232 187.573 43.782 Q 188.823 44.032 190.148 44.057 A 44.316 44.316 0 0 0 190.259 44.059 Q 191.539 44.08 193.073 44.032 Q 194.673 43.982 196.673 43.557 A 7.45 7.45 0 0 0 198.741 42.774 A 9.665 9.665 0 0 0 200.473 41.532 A 17.159 17.159 0 0 0 203.935 37.363 A 21.184 21.184 0 0 0 206.073 32.332 Q 207.623 27.132 206.423 22.732 Q 205.823 19.732 202.873 18.132 A 8.635 8.635 0 0 0 201.514 17.528 A 10.89 10.89 0 0 0 199.748 17.082 Q 197.973 16.782 196.723 16.982 Q 195.473 17.182 194.773 17.232 A 5.894 5.894 0 0 0 194.045 17.303 Q 191.918 17.649 190.973 19.582 Q 190.673 19.582 190.373 19.532 A 4.653 4.653 0 0 0 189.912 19.437 Q 189.579 19.386 189.271 19.394 Z M 210.473 26.682 L 212.173 20.532 A 7.25 7.25 0 0 1 212.858 19.18 A 5.184 5.184 0 0 1 214.148 17.807 A 8.118 8.118 0 0 1 215.148 17.181 Q 215.705 16.89 216.242 16.741 A 4.482 4.482 0 0 1 216.598 16.657 Q 217.367 16.51 217.966 16.674 A 2.08 2.08 0 0 1 218.548 16.932 Q 219.238 17.378 219.115 18.261 A 2.386 2.386 0 0 1 219.073 18.482 Q 219.787 17.767 220.983 17.138 A 14.032 14.032 0 0 1 221.823 16.732 A 42.781 42.781 0 0 1 222.676 16.364 Q 223.602 15.976 224.28 15.753 A 10.605 10.605 0 0 1 224.673 15.632 A 9.595 9.595 0 0 1 225.389 15.455 Q 225.728 15.386 226.029 15.356 A 4.435 4.435 0 0 1 226.473 15.332 Q 228.113 15.432 227.431 17.112 A 4.275 4.275 0 0 1 227.423 17.132 A 1.529 1.529 0 0 1 228.468 17.843 A 2.449 2.449 0 0 1 228.673 18.232 A 2.936 2.936 0 0 1 228.901 19.383 Q 228.901 19.839 228.773 20.332 Q 228.493 21.405 227.56 22.435 A 7.765 7.765 0 0 1 227.423 22.582 A 4.934 4.934 0 0 1 225.78 23.704 A 6.729 6.729 0 0 1 224.598 24.082 Q 222.823 24.482 221.648 25.907 A 12.395 12.395 0 0 0 220.509 27.556 Q 220.009 28.415 219.573 29.432 A 28.232 28.232 0 0 0 218.664 31.939 Q 217.834 34.581 217.107 38.253 A 98.766 98.766 0 0 0 216.873 39.482 A 4.663 4.663 0 0 1 215.647 41.889 Q 215.088 42.495 214.287 43.027 A 10.435 10.435 0 0 1 213.623 43.432 Q 210.923 44.982 208.673 44.332 A 3.455 3.455 0 0 1 207.507 43.785 Q 206.203 42.811 206.423 40.582 Q 206.523 38.432 207.723 34.857 Q 208.641 32.12 209.238 30.409 A 148.682 148.682 0 0 1 209.573 29.457 A 74.388 74.388 0 0 0 209.873 28.599 Q 210.156 27.771 210.333 27.176 A 16.182 16.182 0 0 0 210.473 26.682 Z M 100.523 17.332 A 7.649 7.649 0 0 0 99.803 17.545 Q 97.971 18.189 97.423 19.582 A 14.861 14.861 0 0 0 97.247 19.855 Q 95.879 22.033 94.423 25.932 Q 91.173 34.332 90.373 39.782 A 9.481 9.481 0 0 0 90.334 39.916 Q 89.556 42.672 90.923 44.332 Q 91.523 45.032 92.373 45.407 Q 93.223 45.782 94.048 45.807 A 4.511 4.511 0 0 0 94.184 45.809 Q 94.289 45.809 94.392 45.804 A 3.695 3.695 0 0 0 95.573 45.557 A 2.376 2.376 0 0 0 95.989 45.347 A 1.687 1.687 0 0 0 96.573 44.732 A 0.841 0.841 0 0 1 96.709 44.548 Q 96.969 44.281 97.501 44.183 A 3.512 3.512 0 0 1 97.973 44.132 A 9.937 9.937 0 0 0 98.317 44.088 A 11.884 11.884 0 0 0 98.923 43.982 A 1.528 1.528 0 0 0 99.357 43.823 Q 100.769 43.052 101.423 39.132 Q 101.649 37.021 102.841 32.637 A 158.131 158.131 0 0 1 103.723 29.532 Q 104.473 26.882 105.298 24.357 A 587.011 587.011 0 0 0 105.786 22.855 Q 106.017 22.141 106.221 21.504 A 285.479 285.479 0 0 0 106.673 20.082 Q 106.827 18.692 105.64 17.899 A 4.243 4.243 0 0 0 104.823 17.482 A 6.539 6.539 0 0 0 102.508 17.066 Q 101.545 17.066 100.523 17.332 Z M 106.873 12.082 Q 104.423 12.582 102.898 11.782 Q 101.972 11.297 101.516 10.692 A 2.155 2.155 0 0 1 101.123 9.857 A 2.17 2.17 0 0 1 101.071 9.385 Q 101.071 8.599 101.64 7.778 A 4.834 4.834 0 0 1 101.823 7.532 A 4.712 4.712 0 0 1 103.826 5.978 A 6.768 6.768 0 0 1 105.123 5.582 Q 106.085 5.486 106.538 5.482 A 4.331 4.331 0 0 1 106.573 5.482 Q 106.899 5.482 107.331 5.588 A 5.989 5.989 0 0 1 107.673 5.682 Q 109.323 5.832 109.823 7.132 A 2.374 2.374 0 0 1 110.207 8.431 Q 110.207 8.76 110.12 9.11 A 3.742 3.742 0 0 1 109.948 9.632 Q 109.373 11.032 106.873 12.082 Z M 195.426 30.21 A 7.773 7.773 0 0 0 196.573 29.932 A 12.924 12.924 0 0 1 196.606 30.219 Q 196.875 32.795 196.023 34.832 Q 195.573 35.982 194.748 36.832 A 5.164 5.164 0 0 1 194.111 37.392 A 3.881 3.881 0 0 1 192.973 37.982 Q 192.023 38.282 190.023 38.082 A 3.803 3.803 0 0 1 189.929 37.839 Q 189.524 36.663 190.023 35.507 A 12.68 12.68 0 0 1 190.093 35.348 A 13.669 13.669 0 0 1 191.423 33.032 A 0.016 0.016 0 0 0 191.426 33.043 Q 191.468 33.089 191.983 32.711 A 16.082 16.082 0 0 0 192.123 32.607 A 5.68 5.68 0 0 0 192.59 32.217 A 4.51 4.51 0 0 0 193.248 31.457 Q 193.673 30.832 194.223 30.282 A 5.424 5.424 0 0 0 194.469 30.288 Q 194.934 30.288 195.426 30.21 Z M 120.523 33.032 A 5.619 5.619 0 0 0 120.796 32.379 Q 120.968 31.889 121.098 31.282 A 20.919 20.919 0 0 1 121.366 30.182 A 28.26 28.26 0 0 1 121.723 28.982 Q 117.673 30.632 115.523 33.032 A 7.567 7.567 0 0 0 115.052 33.614 Q 113.615 35.602 115.436 36.514 A 4.08 4.08 0 0 0 115.823 36.682 A 6.222 6.222 0 0 0 116.419 36.808 Q 118.264 37.101 119.173 35.932 A 5.147 5.147 0 0 0 119.573 35.304 Q 119.747 34.984 119.902 34.609 A 8.895 8.895 0 0 0 119.973 34.432 A 17.086 17.086 0 0 1 120.525 33.171 A 20.036 20.036 0 0 1 120.823 32.582 A 5.826 5.826 0 0 1 120.654 32.848 A 4.623 4.623 0 0 1 120.523 33.032 Z M 77.523 32.282 L 77.723 31.282 A 3.475 3.475 0 0 0 77.208 31.033 Q 76.789 30.874 76.399 30.874 A 1.842 1.842 0 0 0 75.548 31.082 Q 74.573 31.582 73.973 32.632 A 5.438 5.438 0 0 0 73.305 34.661 A 6.377 6.377 0 0 0 73.273 34.982 A 4.427 4.427 0 0 0 73.259 35.322 Q 73.259 35.854 73.396 36.313 A 2.872 2.872 0 0 0 73.823 37.182 Q 75.423 37.732 76.023 36.432 Q 76.277 35.961 76.517 35.278 A 14.723 14.723 0 0 0 76.698 34.732 A 45.907 45.907 0 0 1 76.966 33.896 Q 77.088 33.526 77.227 33.123 A 82.797 82.797 0 0 1 77.523 32.282 Z M 54.173 25.932 A 3.471 3.471 0 0 0 53.609 25.861 Q 51.794 25.787 50.574 27.83 A 8.923 8.923 0 0 0 50.023 28.932 Q 49.573 29.882 49.323 30.932 A 2.541 2.541 0 0 0 49.62 30.95 Q 51.129 30.95 52.794 29.172 A 11.125 11.125 0 0 0 52.923 29.032 A 7.355 7.355 0 0 0 53.568 28.122 A 5.813 5.813 0 0 0 53.973 27.307 A 4.52 4.52 0 0 0 54.102 26.942 Q 54.29 26.323 54.173 25.932 Z M 25.573 31.832 L 25.573 31.932 Q 25.673 31.732 25.573 31.832 Z M 251.123 31.832 L 251.123 31.932 Q 251.223 31.732 251.123 31.832 Z" vector-effect="non-scaling-stroke"/></g>
                            </svg>                   
                        </a>
                    </div>

                    <div class="flex flex-row gap-2 items-center content-center w-fit">
                        <div class="text-forest-purple font-bold p-2"
                            onmouseover="toggleMenuOptions()" onmouseout="toggleMenuOptions()" onclick="toggleMenuOptions()">
                            <div class="relative w-full">
                                <h3 class="cursor-pointer rounded-md p-2">MENU</h3>
                                <div id="navbar-menu-dropdown" class="absolute right-0 hidden flex flex-col w-fit mt-2 p-2 bg-green-light rounded-md gap-2">
                                    <a href="./cocktails.html">Alchohol</a>
                                    <a href="./food_menu.html">Food</a>
                                    <a href="./spirits.html">Deserts</a>
                                    <a href="./beverages.html">Beverages</a>
                                </div>
                            </div>
                        </div>
                        <div class="text-forest-purple font-bold p-2">
                            <a href="./index.html">1</a>
                            <a href="./index1.html">2</a>
                        </div>

                        <div class="block cursor-pointer sm:hidden" onclick="openNav()">
                            <div>
                                <svg class="h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#524275"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#524275" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>
                    </div
                </div>
            </div>
        </nav>
    `

    navbar.appendChild(template.content);
}

function renderFooterTemplate() {
    const template = document.createElement('template')
    const footer = document.getElementById('footer')

    template.innerHTML = `
        <footer class="w-full">
            <div class="w-full bg-green-light p-8 font-semibold">
                <div class="w-full flex flex-col sm:flex-row gap-8 text-forest-purple">

                    <div class="flex flex-col gap-2 w-fit">
                        <p class="underline">mediastorm.cy@gmail.com</p>
                        <p class="underline">+357 99000000</p>
                    </div>

                    <div class="flex flex-col gap-2 w-fit underline">
                        <p>Odos, Arithmos, Paphos</p>
                        <p>T.X, CY</p>
                    </div>

                </div>

                <div class="w-full text-forest-purple pt-4">
                    <p>Designed by <a class="underline" href="https://www.mediastorm.cy" target="_blank">Mediastorm</a>
                </div>
            </div>
        </footer>
    `

    footer.appendChild(template.content);
}

function sidenavTemplate() {

    let sidenav =  document.createElement('sidenav')
    sidenav.innerHTML = `<div id="mySidenav" class="sidenav hidden w-250px h-svh fixed top-0 left-0 z-20 bg-forest-purple">
                            <div class="flex flex-col w-full h-full p-8 items-center">
                                <div class="flex w-full justify-end">
                                    <a href="javascript:void(0)" class="closebtn text-white text-4xl" onclick="closeNav()">&times;</a>
                                </div>
                                <div class="flex flex-col justify-self-center justify-center w-fit h-full gap-4 font-bold text-2xl text-green-light">
                                        <div class="flex flex-row gap-4">
                                            <span class="h-full w-1 bg-white">&nbsp;</span>
                                            <a href="cocktails.html" class="">COCKTAILS</a>
                                        </div>
                                        <div class="flex flex-row gap-4">
                                            <span class="h-full w-1 bg-white">&nbsp;</span>
                                            <a href="food_menu.html" class="">FOOD</a>
                                        </div>
                                        <div class="flex flex-row gap-4">
                                            <span class="h-full w-1 bg-white">&nbsp;</span>
                                            <a href="spirits.html" class="">SPIRITS</a>
                                        </div>
                                        <div class="flex flex-row gap-4">
                                            <span class="h-full w-1 bg-white">&nbsp;</span>
                                            <a href="beverages.html" class="">BEVERAGES</a>
                                        </div>
                                </div>
                            </div>
                        </div>`

    document.body.appendChild(sidenav)
}

function renderFooterAndHeader() {
    renderFooterTemplate()
    renderNavbarTemplate()
    sidenavTemplate()
}

function openNav() {
    document.getElementById("mySidenav").classList.add("w-screen");
    document.getElementById("mySidenav").classList.remove("hidden");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").classList.add("hidden");

}